import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import BlobBackground from '@/components/BlobBackground';

export default function Done() {
  return (
    <div className='page-container flex max-w-5xl flex-col items-center justify-center'>
      <nav className='absolute top-4 left-4'>
        <Link href='/'>
          <Image src='/logo/long.png' alt='logo' width={125} height={125} />
        </Link>
      </nav>
      <BlobBackground />
      <div className='flex w-lg items-center justify-between gap-y-6 text-stone-800'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-4xl font-bold tracking-tight'>You&apos;re all set.</h1>
          <p className='text-stone-500'>A fresh start, ready when you are.</p>
        </div>
        <Link
          href='/'
          className='group h-fit w-fit rounded-md bg-stone-800 px-4 py-3 text-sm font-semibold text-white hover:bg-stone-700'
        >
          Go to my planner{' '}
          <FaArrowRight className='ml-1 inline transition-transform group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  );
}
