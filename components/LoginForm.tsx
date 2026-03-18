'use client';

import { useActionState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPassword, signInWithGoogle } from '@/app/actions/auth';
import AuthError from './AuthError';

export default function LoginForm() {
  const [error, action] = useActionState(signInWithPassword, null);

  return (
    <>
      <form action={action} className='flex flex-col gap-y-3'>
        {error && <AuthError message={error} />}
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

      <form action={signInWithGoogle}>
        <button
          type='submit'
          className='flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-md border border-stone-200 bg-white py-3 text-sm font-medium text-stone-700 hover:bg-stone-50'
        >
          <FcGoogle size={18} />
          Continue with Google
        </button>
      </form>
    </>
  );
}
