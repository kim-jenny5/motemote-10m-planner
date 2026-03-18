import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import BlobBackground from '@/components/BlobBackground';
import { signIn } from '@/auth';

export const Login = () => {
  return (
    <div className='page-container items-center justify-center'>
      <BlobBackground />
      <div className='flex h-full w-full max-w-md flex-col justify-center gap-y-4'>
        <div className='flex items-end justify-between'>
          <Link href='/' className='h-fit w-fit'>
            <Image src='/logo/long.png' alt='logo' width={125} height={125} />
          </Link>
          <div className='text-2xl leading-none font-bold tracking-tighter uppercase'>Log In</div>
        </div>
        <div className='flex w-full flex-col gap-y-4 rounded-md bg-white p-8 shadow-lg'>
          {/* Email/password form */}
          <form
            action={async (formData) => {
              'use server';
              await signIn('credentials', {
                email: formData.get('email'),
                password: formData.get('password'),
                redirectTo: '/',
              });
            }}
            className='flex flex-col gap-y-3'
          >
            <input
              name='email'
              type='email'
              placeholder='Email'
              required
              className='w-full rounded-sm bg-stone-50 px-4 py-3 text-sm shadow-sm focus:ring-1 focus:ring-stone-700 focus:outline-none'
            />
            <input
              name='password'
              type='password'
              placeholder='Password'
              required
              className='w-full rounded-sm bg-stone-50 px-4 py-3 text-sm shadow-sm focus:ring-1 focus:ring-stone-700 focus:outline-none'
            />
            <button
              type='submit'
              className='w-full cursor-pointer rounded-md bg-black py-3 text-sm font-semibold text-stone-50 hover:bg-stone-700'
            >
              Log In
            </button>
          </form>

          <div className='flex items-center gap-x-3 text-xs text-stone-400'>
            <div className='h-px flex-1 bg-stone-200' />
            or
            <div className='h-px flex-1 bg-stone-200' />
          </div>

          <form
            action={async () => {
              'use server';
              await signIn('google', { redirectTo: '/' });
            }}
          >
            <button
              type='submit'
              className='flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-md border border-stone-200 bg-white py-3 text-sm font-medium text-stone-700 hover:bg-stone-50'
            >
              <FcGoogle size={18} />
              Continue with Google
            </button>
          </form>

          <p className='text-center text-xs text-stone-500'>
            New here?{' '}
            <Link href='/' className='font-medium text-stone-800 hover:underline'>
              Get started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
