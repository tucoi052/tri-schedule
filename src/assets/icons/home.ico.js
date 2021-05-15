import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const color = props.color || '#17C554';
  return (
    <Svg width={25} height={25} viewBox='0 0 30 30' fill='none' {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 12.727v12.5S3.75 27.5 6 27.5h18s2.25 0 2.25-2.273v-12.5L15 2.5 3.75 12.727z'
        stroke={color}
      />
    </Svg>
  );
}

export default SvgComponent;
