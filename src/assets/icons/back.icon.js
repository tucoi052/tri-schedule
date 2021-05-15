import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={45} height={45} viewBox='0 0 45 45' fill='none' {...props}>
      <Path
        d='M26.25 11.25L15 22.5l11.25 11.25'
        stroke='#828282'
        strokeLinecap='round'
      />
    </Svg>
  );
}

export default SvgComponent;
