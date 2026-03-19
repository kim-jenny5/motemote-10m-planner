import Link from 'next/link';
import Grid from '@/components/Grid';

const Home = async ({ searchParams }: { searchParams: Promise<{ newUser?: string }> }) => {
  const { newUser } = await searchParams;

  return (
    <div className='page-container max-w-5xl cursor-none justify-center'>
      <div className='my-auto flex w-2xl flex-col justify-center gap-y-4'>
        {newUser && (
          <div className='w-full rounded-md bg-yellow-50 px-4 py-3 text-center text-sm text-yellow-600'>
            Looks like you&apos;re new here! Select a tile below to get started first.
          </div>
        )}
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
