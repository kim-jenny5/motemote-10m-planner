'use client';

import { useEffect, useState } from 'react';

const GetStarted = () => {
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    const color = sessionStorage.getItem('color');
    setColor(color);
  }, []);

  return (
    <div className='container'>
      <div className='text-3xl'>{color ?? 'No color found'}</div>
    </div>
  );
};

export default GetStarted;
