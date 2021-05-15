import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent(props) {
  const color = props.color || '#2329D6';
  return (
    <Svg width={33} height={33} viewBox='0 0 33 33' fill='none' {...props}>
      <G stroke={color} strokeLinecap='round'>
        <Path d='M8.25 9.625h16.5M8.25 16.5h16.5M8.25 23.375h16.5' />
      </G>
    </Svg>
  );
}

export default SvgComponent;
