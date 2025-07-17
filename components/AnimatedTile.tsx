'use client';

import { useState } from 'react';
import Anime from 'react-anime';
import Image from 'next/image';

interface AnimatedTileProps {
  src: string;
  alt: string;
  text?: string;
  position?: number[];
  style: string;
}

export const AnimatedTile = ({ src, alt, text, style: styleFromProps }: AnimatedTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const logInBtn = text === 'Log In';
  const formattedColor = logInBtn ? 'text-neutral-100' : `text-${text?.toLowerCase().replaceAll(' ', '-')}`;

  return (
    <div
      className={`relative col-span-1 row-span-1 ${styleFromProps} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className='flex h-full w-full items-center justify-center rounded-sm bg-stone-800'>
          <div className='text-center'>
            <div className={`${formattedColor} text-5xl font-black tracking-tight uppercase`}>{text}</div>
            {!logInBtn && <div className='pt-2 text-2xl font-bold text-neutral-100'>Pick me!</div>}
          </div>
        </div>
      ) : (
        <Image src={src} alt={alt} fill className='rounded-sm object-fill' />
      )}
    </div>
  );
};
