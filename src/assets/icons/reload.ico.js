import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={37} height={37} viewBox='0 0 37 37' fill='none' {...props}>
      <Path
        d='M33.917 18.5l-4.625 4.625-4.625-4.625M3.083 18.5l4.625-4.625 4.625 4.625'
        stroke='#828282'
        strokeLinecap='round'
      />
      <Path
        d='M29.292 23.125l.024-4.547c0-6.003-4.866-10.87-10.87-10.87a10.82 10.82 0 00-6.113 1.881M24.691 27.51a10.819 10.819 0 01-6.113 1.882c-6.003 0-10.87-4.867-10.87-10.87v-4.647 0'
        stroke='#828282'
        strokeLinecap='round'
      />
    </Svg>
  );
}

export default SvgComponent;
