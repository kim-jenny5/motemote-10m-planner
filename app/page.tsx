import Link from 'next/link';
import Grid from '@/components/Grid';

const Home = () => {
  return (
    <div className='mx-auto flex h-screen w-screen max-w-5xl items-center justify-center p-8 lg:p-10 xl:p-12'>
      <div className='flex w-2xl flex-col items-center justify-center gap-y-4'>
        <div className='text-center text-lg leading-none tracking-tight text-stone-800'>
          Select a tile below to get started.
        </div>
        <Grid />
        <div className='text-center text-4xl leading-none font-bold tracking-tighter text-stone-800 uppercase'>
          Inspired by the viral MOTEMOTE 10 minutes planner from South Korea.
        </div>
        <div className='text-center text-sm leading-none text-stone-800'>
          Designed and built by{' '}
          <Link href='https://jennykim.dev/' target='_blank' className='hover:underline'>
            Jenny Kim
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Home;
