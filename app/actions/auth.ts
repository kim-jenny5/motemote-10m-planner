'use server';

import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { users } from '@/db/schema';
import { signIn } from '@/auth';

export async function signUpWithPassword(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const [existing] = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existing) throw new Error('An account with this email already exists.');

  const hashed = await bcrypt.hash(password, 12);
  await db.insert(users).values({ email, name, password: hashed });

  await signIn('credentials', { email, password, redirectTo: '/done' });
}

export async function signUpWithGoogle(formData: FormData) {
  const cookieStore = await cookies();
  cookieStore.set('allow_new_google', 'true', { httpOnly: true, maxAge: 300, path: '/' });
  await signIn('google', { redirectTo: '/done' });
}
