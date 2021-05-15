import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const color = props.color || '#2329D6';
  return (
    <Svg width={30} height={30} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M12 20l-9-9m9 9l9-9m-9 9l-4-9m4 9l4-9M3 11l4-6m-4 6h5M7 5l1 6M7 5h5m5 0l4 6m-4-6l-1 6m1-6h-5m9 6h-5m-8 0h8m-8 0l4-6m4 6l-4-6'
        stroke={color}
      />
    </Svg>
  );
}

export default SvgComponent;
