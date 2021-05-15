import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent(props) {
  const color = props.color || '#2329D6';
  return (
    <Svg width={27} height={27} viewBox='0 0 24 24' fill='none' {...props}>
      <G stroke={color}>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 2v9a6 6 0 006 6v0a6 6 0 006-6V2H6z'
          strokeLinecap='round'
        />
        <Path d='M7 21h10' strokeLinecap='round' />
        <Path d='M12 17v4' />
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 5H5a3 3 0 00-3 3v0a3 3 0 003 3h1V5zM18 11h1a3 3 0 003-3v0a3 3 0 00-3-3h-1v6z'
          strokeLinecap='round'
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
