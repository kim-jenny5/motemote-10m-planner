'use client';

import { motion } from 'motion/react';

const BLOBS = {
  'rosy-haze': [
    {
      className: 'top-[10%] left-[10%] h-[480px] w-[480px]',
      bg: 'bg-rosy-haze',
      opacity: 'opacity-90',
      blur: 'blur-[160px]',
      x: [0, 400, -300, 200, -150, 0],
      y: [0, -300, 250, -200, 150, 0],
      duration: 70,
    },
  ],
  'blue-dream': [
    {
      className: 'top-[15%] left-[65%] h-[460px] w-[460px]',
      bg: 'bg-blue-dream',
      opacity: 'opacity-80',
      blur: 'blur-[160px]',
      x: [0, -350, 300, -250, 200, 0],
      y: [0, 300, -250, 200, -150, 0],
      duration: 75,
    },
  ],
  'aloe-dew': [
    {
      className: 'top-[65%] left-[15%] h-[450px] w-[450px]',
      bg: 'bg-aloe-dew',
      opacity: 'opacity-75',
      blur: 'blur-[150px]',
      x: [0, 350, -300, 250, -200, 0],
      y: [0, -250, 200, -150, 100, 0],
      duration: 68,
    },
  ],
  'grape-juice': [
    {
      className: 'top-[60%] left-[60%] h-[440px] w-[440px]',
      bg: 'bg-grape-juice',
      opacity: 'opacity-75',
      blur: 'blur-[150px]',
      x: [0, -400, 350, -300, 250, 0],
      y: [0, 300, -250, 200, -150, 0],
      duration: 72,
    },
  ],
  'peach-cream': [
    {
      className: 'top-[20%] left-[40%] h-[470px] w-[470px]',
      bg: 'bg-peach-cream',
      opacity: 'opacity-65',
      blur: 'blur-[160px]',
      x: [0, 350, -250, 200, -150, 0],
      y: [0, -280, 230, -180, 120, 0],
      duration: 76,
    },
  ],
  'cloud-puff': [
    {
      className: 'top-[40%] left-[30%] h-[500px] w-[500px]',
      bg: 'bg-cloud-puff',
      opacity: 'opacity-60',
      blur: 'blur-[160px]',
      x: [0, 320, -270, 220, -170, 0],
      y: [0, -260, 210, -160, 110, 0],
      duration: 73,
    },
  ],
  'berry-sky': [
    {
      className: 'top-[20%] left-[15%] h-[500px] w-[500px]',
      bg: 'bg-berry-sky-from',
      opacity: 'opacity-90',
      blur: 'blur-[180px]',
      x: [0, 360, -300, 240, -180, 0],
      y: [0, -280, 220, -160, 100, 0],
      duration: 74,
    },
    {
      className: 'top-[50%] left-[35%] h-[460px] w-[460px]',
      bg: 'bg-berry-sky-via',
      opacity: 'opacity-80',
      blur: 'blur-[170px]',
      x: [0, -300, 260, -220, 180, 0],
      y: [0, 260, -210, 160, -120, 0],
      duration: 71,
    },
    {
      className: 'top-[35%] left-[65%] h-[440px] w-[440px]',
      bg: 'bg-berry-sky-to',
      opacity: 'opacity-75',
      blur: 'blur-[160px]',
      x: [0, 300, -270, 230, -190, 0],
      y: [0, -250, 210, -170, 130, 0],
      duration: 73,
    },
  ],
  'cotton-check': [
    {
      className: 'top-[25%] left-[20%] h-[480px] w-[480px]',
      bg: 'bg-cotton-check-from',
      opacity: 'opacity-85',
      blur: 'blur-[170px]',
      x: [0, 350, -300, 250, -200, 0],
      y: [0, -250, 200, -150, 100, 0],
      duration: 70,
    },
    {
      className: 'top-[55%] left-[50%] h-[500px] w-[500px]',
      bg: 'bg-cotton-check-to',
      opacity: 'opacity-75',
      blur: 'blur-[160px]',
      x: [0, -300, 250, -200, 150, 0],
      y: [0, 240, -190, 140, -90, 0],
      duration: 72,
    },
  ],
};

type BlobKey = keyof typeof BLOBS;

interface BlobBackgroundProps {
  color?: string;
}

const BlobBackground = ({ color }: BlobBackgroundProps) => {
  if (color && color in BLOBS) {
    const blobs = BLOBS[color as BlobKey];

    return (
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute ${blob.className} ${blob.bg} scale-150 rounded-full ${blob.opacity} ${blob.blur}`}
            animate={{ x: blob.x, y: blob.y }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    );
  }

  // fallback: only render the first 5 named blobs (excluding berry-sky & cotton-check)
  const fallbackKeys: BlobKey[] = Object.keys(BLOBS)
    .filter((key) => key !== 'berry-sky' && key !== 'cotton-check')
    .slice(0, 5) as BlobKey[];

  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      {fallbackKeys.flatMap((key, _) =>
        BLOBS[key].map((blob, index) => (
          <motion.div
            key={`${key}-${index}`}
            className={`absolute ${blob.className} ${blob.bg} rounded-full ${blob.opacity} ${blob.blur}`}
            animate={{ x: blob.x, y: blob.y }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        )),
      )}
    </div>
  );
};

export default BlobBackground;
