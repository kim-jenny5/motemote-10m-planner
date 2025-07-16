import BookGrid from '@/components/BookGrid';

export default function Home() {
  return (
    <div className='mx-auto flex h-screen w-screen max-w-5xl items-center justify-center'>
      <div className='flex w-2xl flex-col items-center justify-center gap-y-4'>
        <div className='text-center text-lg leading-none tracking-tight text-stone-800'>
          Select a color below to get started.
        </div>
        <BookGrid />
        <div className='text-center text-4xl leading-none font-bold tracking-tighter text-stone-800 uppercase'>
          Inspired by the viral MOTEMOTE 10 minutes planner from South Korea
        </div>
      </div>
    </div>
  );
}
