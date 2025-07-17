'use client';

import { motion } from 'motion/react';

const BLOBS = [
  {
    name: 'rosy-haze',
    className: 'top-[10%] left-[10%] h-[480px] w-[480px]',
    bg: 'bg-rosy-haze',
    opacity: 'opacity-90',
    blur: 'blur-[160px]',
    x: [0, 400, -300, 200, -150, 0],
    y: [0, -300, 250, -200, 150, 0],
    duration: 70,
  },
  {
    name: 'blue-dream',
    className: 'top-[15%] left-[65%] h-[460px] w-[460px]',
    bg: 'bg-blue-dream',
    opacity: 'opacity-80',
    blur: 'blur-[160px]',
    x: [0, -350, 300, -250, 200, 0],
    y: [0, 300, -250, 200, -150, 0],
    duration: 75,
  },
  {
    name: 'aloe-dew',
    className: 'top-[65%] left-[15%] h-[450px] w-[450px]',
    bg: 'bg-aloe-dew',
    opacity: 'opacity-75',
    blur: 'blur-[150px]',
    x: [0, 350, -300, 250, -200, 0],
    y: [0, -250, 200, -150, 100, 0],
    duration: 68,
  },
  {
    name: 'grape-juice',
    className: 'top-[60%] left-[60%] h-[440px] w-[440px]',
    bg: 'bg-grape-juice',
    opacity: 'opacity-75',
    blur: 'blur-[150px]',
    x: [0, -400, 350, -300, 250, 0],
    y: [0, 300, -250, 200, -150, 0],
    duration: 72,
  },
  {
    name: 'peach-cream',
    className: 'top-[20%] left-[40%] h-[470px] w-[470px]',
    bg: 'bg-peach-cream',
    opacity: 'opacity-65',
    blur: 'blur-[160px]',
    x: [0, 350, -250, 200, -150, 0],
    y: [0, -280, 230, -180, 120, 0],
    duration: 76,
  },
  {
    name: 'cloud-puff',
    className: 'top-[40%] left-[30%] h-[500px] w-[500px]',
    bg: 'bg-cloud-puff',
    opacity: 'opacity-60',
    blur: 'blur-[160px]',
    x: [0, 320, -270, 220, -170, 0],
    y: [0, -260, 210, -160, 110, 0],
    duration: 73,
  },
];

const BlobBackground = () => {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      {BLOBS.map((blob) => (
        <motion.div
          key={blob.name}
          className={`absolute ${blob.className} ${blob.bg} rounded-full ${blob.opacity} ${blob.blur}`}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default BlobBackground;
