'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

interface TileProps {
  src: string;
  alt: string;
  text?: string;
  color?: string;
  style: string;
}

const Tile = ({ src, alt, text, color, style: styleFromProps }: TileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const logInBtn = text === 'Log In';
  const formattedColor = color?.toLowerCase().replaceAll(' ', '-');
  const textColor = logInBtn ? 'text-neutral-100' : `text-${formattedColor}`;

  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem('plannerColor', formattedColor ?? '');
    router.push('/get-started');
  };

  return (
    <motion.div
      whileHover={
        logInBtn
          ? { scale: [1, 0.95, 1] }
          : { rotate: [0, -0.75, 0.75, -0.75, 0.75, 0], scale: 1.05 }
      }
      transition={{ duration: logInBtn ? 0.6 : 0.4, ease: 'easeInOut' }}
      className={`group relative col-span-1 row-span-1 ${styleFromProps} cursor-pointer overflow-hidden rounded-sm`}
    >
      {logInBtn ? (
        <div
          className='relative h-full w-full'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className={`object-fill transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <Link
            href='/login'
            className={`absolute inset-0 flex items-center justify-center rounded-full bg-stone-800 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className='flex w-full flex-col gap-y-2 p-4 text-center'>
              <div className='text-5xl font-bold text-neutral-100 uppercase'>Log In</div>
            </div>
          </Link>
        </div>
      ) : (
        <div className='relative h-full w-full' onClick={handleClick}>
          <Image src={src} alt={alt} fill className='object-fill' />
          <Link href='/get-started'>
            <div className='absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <div className='flex w-full flex-col gap-y-1 p-4 text-center'>
                <div
                  className={`${textColor} text-[2.75rem] leading-none font-black tracking-tight uppercase text-shadow-2xs`}
                >
                  {color}
                </div>
                <div className='text-lg font-bold text-stone-900/40 uppercase'>Pick me!</div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Tile;
