import Tile from './Tile';

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

const Grid = () => {
  return (
    <div className='relative grid aspect-square w-full grid-cols-3 grid-rows-3 gap-4'>
      <Tile src='/logo/base.png' alt='logo' text='Log In' style='col-start-2 row-start-2' />
      {COLORS.map((color, index) => {
        const position = index;
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
          <Tile
            key={index}
            src={`/planner/${index + 1}.jpg`}
            alt={`${color} planner`}
            color={color}
            style={`col-start-${col} row-start-${row}`}
          />
        );
      })}
    </div>
  );
};

export default Grid;
