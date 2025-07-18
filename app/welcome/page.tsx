'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import BlobBackground from '@/components/BlobBackground';
import personalities from '@/components/Personalities';

const Welcome = () => {
  const [color, setColor] = useState<string>('');
  const [name, setName] = useState('');
  const [blurb, setBlurb] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    const selectedColor = sessionStorage.getItem('plannerColor') ?? '';
    setColor(selectedColor);

    if (selectedColor && personalities[selectedColor]) {
      const options = personalities[selectedColor];
      const randomIndex = Math.floor(Math.random() * options.length);
      setBlurb(options[randomIndex]);
    }
  }, []);

  return (
    <div className={`page-container flex max-w-5xl flex-col items-center justify-center`}>
      <nav>
        <Link href='/' className='h-fit w-fit'>
          <Image src='/logo/long.png' alt='logo' width={125} height={125} />
        </Link>
      </nav>
      <BlobBackground color={color} />
      <div className='flex w-md flex-col gap-y-4 text-stone-800'>
        {color && <h1>Your vibe? {blurb}</h1>}
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='name' className='block text-xl tracking-tight'>
            What should we call you?
          </label>
          <input
            id='name'
            type='text'
            placeholder='Your name or nickname'
            className='text-md w-full rounded-sm bg-white px-4 py-3 shadow-md focus:border-none focus:ring-2 focus:ring-yellow-400 focus:outline-none'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Optionally: automatically go to next step when name is filled */}
        {/* or keep this page just for name + log in */}
      </div>

      <div className='absolute bottom-4 left-0 w-full text-center'>
        <button
          onClick={() => router.push('/login')}
          className='cursor-pointer text-sm text-stone-600 underline hover:text-stone-500'
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
};

export default Welcome;
