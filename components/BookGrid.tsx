import { AnimatedTile } from './AnimatedTile';

const BOOKS = [
  { name: 'Rosy Haze', color: '#F9B9BF' },
  { name: 'Blue Dream', color: '#A9CFFD' },
  { name: 'Aloe Dew', color: '#9FE9E1' },
  { name: 'Grape Juice', color: '#CABAF7' },
  { name: 'Berry Sky', color: ['#FBC1B9', '#F3B6D4', '#D8C6F2'] },
  { name: 'Peach Cream', color: '#FBCAB3' },
  { name: 'Cloud Puff', color: '#D3E6FD' },
  { name: 'Cotton Check', color: ['#B9E1FB', '#F9F7F2'] },
];

export const BookGrid = () => {
  return (
    <div className='relative grid aspect-square w-full grid-cols-3 grid-rows-3 gap-4'>
      <AnimatedTile src='/logo/base.png' alt='logo' text='Log In' style='col-start-2 row-start-2' />
      {BOOKS.map((book, index) => {
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
            alt={`${book.name} book`}
            text={book.name}
            style={`col-start-${col} row-start-${row}`}
          />
        );
      })}
    </div>
  );
};
