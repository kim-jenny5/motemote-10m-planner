'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import BlobBackground from '@/components/BlobBackground';
import { signUpWithPassword, signUpWithGoogle } from '@/app/actions/auth';

type Step = 'name' | 'email' | 'password';

const steps: Step[] = ['name', 'email', 'password'];

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const Welcome = () => {
  const [step, setStep] = useState<Step>('name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordFormRef = useRef<HTMLFormElement>(null);

  const stepIndex = steps.indexOf(step);

  const emailError = step === 'email' && email.length > 0 && !isValidEmail(email);

  const canAdvance =
    (step === 'name' && name.trim().length > 0) ||
    (step === 'email' && isValidEmail(email)) ||
    (step === 'password' && password.trim().length > 0);

  const handleArrow = () => {
    if (step === 'name') setStep('email');
    else if (step === 'email') setStep('password');
    else if (step === 'password') passwordFormRef.current?.requestSubmit();
  };

  return (
    <div className='page-container flex max-w-5xl flex-col items-center justify-center'>
      <BlobBackground />

      {/* Centered card */}
      <div className='relative z-10 flex w-md flex-col gap-y-12 text-stone-800'>
        {/* Logo + progress dots */}
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src='/logo/long.png' alt='logo' width={100} height={100} />
          </Link>
          <div className='flex gap-x-1.5'>
            {steps.map((s, i) => (
              <div
                key={s}
                className={`h-1.5 w-6 rounded-full transition-colors ${i <= stepIndex ? 'bg-stone-800' : 'bg-stone-300'}`}
              />
            ))}
          </div>
        </div>

        <div className='flex w-full flex-col gap-y-3 overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={step}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className='flex flex-col gap-y-3'
            >
              {step === 'name' && (
                <>
                  <label className='text-3xl font-bold tracking-tight'>What should we call you?</label>
                  <input
                    autoFocus
                    type='text'
                    placeholder='Your name or nickname'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && canAdvance && handleArrow()}
                    className='w-full rounded-sm bg-white px-4 py-3 text-sm shadow-md focus:ring-1 focus:ring-stone-700 focus:outline-none'
                  />
                </>
              )}

              {step === 'email' && (
                <>
                  <label className='text-3xl font-bold tracking-tight'>What&apos;s your email?</label>
                  <input
                    autoFocus
                    type='email'
                    placeholder='you@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && canAdvance && handleArrow()}
                    className={`w-full rounded-sm bg-white px-4 py-3 text-sm shadow-md focus:outline-none ${
                      emailError
                        ? 'ring-1 ring-red-400 focus:ring-1 focus:ring-red-400'
                        : 'focus:ring-1 focus:ring-stone-700'
                    }`}
                  />
                  {emailError && (
                    <p className='text-xs text-red-500'>Please enter a valid email address.</p>
                  )}
                </>
              )}

              {step === 'password' && (
                <>
                  <label className='text-3xl font-bold tracking-tight'>Create a password</label>
                  <form ref={passwordFormRef} action={signUpWithPassword}>
                    <input type='hidden' name='name' value={name} />
                    <input type='hidden' name='email' value={email} />
                    <input
                      autoFocus
                      name='password'
                      type='password'
                      placeholder='At least 8 characters'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && canAdvance && handleArrow()}
                      className='w-full rounded-sm bg-white px-4 py-3 text-sm shadow-md focus:ring-1 focus:ring-stone-700 focus:outline-none'
                    />
                  </form>
                  <div className='flex items-center gap-x-3 text-xs text-stone-400'>
                    <div className='h-px flex-1 bg-stone-300' />
                    or
                    <div className='h-px flex-1 bg-stone-300' />
                  </div>
                  <form action={signUpWithGoogle}>
                    <button
                      type='submit'
                      className='flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-md border border-stone-200 bg-white py-3 text-sm font-medium text-stone-700 hover:bg-stone-50'
                    >
                      <FcGoogle size={18} />
                      Continue with Google
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom row: link + arrow */}
          <div className='flex items-center justify-between pt-2'>
            <Link href='/login' className='text-sm text-stone-400 hover:text-stone-600'>
              Already have an account?
            </Link>
            <button
              onClick={handleArrow}
              disabled={!canAdvance}
              className={`flex items-center justify-center rounded-md px-4 py-1 transition-colors ${
                canAdvance
                  ? 'cursor-pointer bg-stone-800 text-white hover:bg-stone-600'
                  : 'cursor-not-allowed bg-stone-200 text-stone-400'
              }`}
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
