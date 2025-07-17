declare module 'react-anime' {
  import * as React from 'react';

  interface AnimeProps extends React.HTMLAttributes<HTMLDivElement> {
    scale?: [number, number];
    translateX?: [number, number];
    translateY?: [number, number];
    opacity?: [number, number];
    rotate?: [number, number];
    easing?: string;
    duration?: number;
    delay?: number;
    loop?: boolean;
    autoplay?: boolean;
    trigger?: 'hover' | 'scroll' | 'load' | 'click';
  }

  const Anime: React.FC<AnimeProps>;
  export default Anime;
}
