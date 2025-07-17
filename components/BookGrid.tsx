import { AnimatedTile } from './AnimatedTile';

const COLORS = [
  'Rosy Haze',
  'Blue Dream',
  'Aloe Dew',
  'Grape Juice',
  'Berry Sky',
  'Peach Cream',
  'Cloud Puff',
  'Cotton Check',
];

export const BookGrid = () => {
  return (
    <div className='relative grid aspect-square w-full grid-cols-3 grid-rows-3 gap-4'>
      <AnimatedTile src='/logo/base.png' alt='logo' text='Log In' style='col-start-2 row-start-2' />
      {COLORS.map((color, index) => {
        let position = index;
        const positions = [
          [1, 1],
          [2, 1],
          [3, 1],
          [1, 2],
          [3, 2],
          [1, 3],
          [2, 3],
          [3, 3],
        ];
        const [col, row] = positions[position];

        return (
          <AnimatedTile
            key={index}
            src={`/book/${index + 1}.jpg`}
            alt={`${color} book`}
            text={color}
            style={`col-start-${col} row-start-${row}`}
          />
        );
      })}
    </div>
  );
};
