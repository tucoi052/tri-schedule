import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <G stroke='#56CCF2'>
        <Path d='M3 5h18v16H3V5z' strokeLinejoin='round' />
        <Path d='M21 9H3M7 5V3M17 5V3' strokeLinecap='round' />
      </G>
    </Svg>
  );
}

export default SvgComponent;
