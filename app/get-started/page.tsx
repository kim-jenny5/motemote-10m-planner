'use client';

import { useEffect, useState } from 'react';
import BlobBackground from '@/components/BlobBackground';

const GetStarted = () => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    const selectedColor = sessionStorage.getItem('plannerColor') ?? '';
    console.log(selectedColor);
    setColor(selectedColor);
  }, []);

  return (
    <div className={`page-container`}>
      <BlobBackground color={color} />
      <div className='text-3xl'>{color ?? 'No color found'}</div>
    </div>
  );
};

export default GetStarted;
