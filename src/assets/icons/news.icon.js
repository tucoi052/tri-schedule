import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={150} height={150} viewBox='0 0 24 24' fill='none' {...props}>
      <G stroke='#27AE60' strokeLinecap='round'>
        <Path d='M22 5v12s0 2-2 2-2-2-2-2V5H2v11s0 3 3 3h15M6 14h1M11 14h3M6 10h8' />
      </G>
    </Svg>
  );
}

export default SvgComponent;
