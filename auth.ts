import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { users } from '@/db/schema';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: 'jwt' },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        const [existing] = await db
          .select()
          .from(users)
          .where(eq(users.email, profile?.email!))
          .limit(1);

        if (!existing) {
          const cookieStore = await cookies();
          const allowNew = cookieStore.get('allow_new_google')?.value === 'true';
          if (!allowNew) return '/?newUser=true';
          cookieStore.delete('allow_new_google');
        }
      }
      return true;
    },
  },
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email as string))
          .limit(1);

        if (!user?.password) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );

        return passwordMatch ? user : null;
      },
    }),
  ],
});
