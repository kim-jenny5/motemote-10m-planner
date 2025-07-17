import Link from 'next/link';
import Image from 'next/image';
import BlobBackground from '@/components/BlobBackground';
// import TestAuth from './TestAuth';

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
        <div className='flex w-full flex-col items-center justify-center gap-y-4 rounded-md bg-white p-8 shadow-lg'>
          {/* <TestAuth /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
