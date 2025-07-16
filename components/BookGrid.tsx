import Image from 'next/image';

export default function BookGrid() {
  return (
    <div className='relative grid aspect-square w-full grid-cols-3 grid-rows-3 gap-4'>
      <Image
        src='/logo/base.png'
        alt='logo'
        fill
        className='col-span-1 col-start-2 row-span-1 row-start-2 object-contain'
      />
      <Image
        src='/book/1.jpg'
        alt='pink book'
        fill
        className='col-span-1 col-start-1 row-span-1 row-start-1 rounded-lg object-contain'
      />
      <Image
        src='/book/2.jpg'
        alt='blue book'
        fill
        className='col-span-1 col-start-2 row-span-1 row-start-1 rounded-lg object-contain'
      />
      <Image
        src='/book/3.jpg'
        alt='green book'
        fill
        className='col-span-1 col-start-3 row-span-1 row-start-1 rounded-lg object-contain'
      />
      <Image
        src='/book/4.jpg'
        alt='purple book'
        fill
        className='col-span-1 col-start-1 row-span-1 row-start-2 rounded-lg object-contain'
      />
      <Image
        src='/book/5.jpg'
        alt='gradient book'
        fill
        className='col-span-1 col-start-3 row-span-1 row-start-2 rounded-lg object-contain'
      />
      <Image
        src='/book/6.jpg'
        alt='orange book'
        fill
        className='col-span-1 col-start-1 row-span-1 row-start-3 rounded-lg object-contain'
      />
      <Image
        src='/book/7.png'
        alt='light blue book'
        fill
        className='col-span-1 col-start-2 row-span-1 row-start-3 rounded-lg object-contain'
      />
      <Image
        src='/book/8.png'
        alt='checkered book'
        fill
        className='col-span-1 col-start-3 row-span-1 row-start-3 rounded-lg object-contain'
      />
    </div>
  );
}
