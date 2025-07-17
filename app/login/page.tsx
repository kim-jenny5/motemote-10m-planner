import Link from 'next/link';
import Image from 'next/image';
import BlobBackground from '@/components/BlobBackground';

export const Login = () => {
  return (
    <div className='mx-auto flex h-screen w-screen items-center justify-center p-8 lg:p-10 xl:p-12'>
      <BlobBackground />
      <div className='flex h-full w-full max-w-md flex-col justify-center gap-y-4'>
        <div className='flex items-end justify-between'>
          <Link href='/' className='h-fit w-fit'>
            <Image src='/logo/long.png' alt='logo' width={125} height={125} />
          </Link>
          <div className='text-2xl leading-none font-bold tracking-tighter uppercase'>Log In</div>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-y-4 rounded-md bg-white p-8 shadow-lg'></div>
      </div>
    </div>
  );
};

export default Login;
