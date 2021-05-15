import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';

function SvgComponent(props) {
  const color = props.color || '#9B51E0';
  return (
    <Svg width={26} height={24} viewBox='0 0 26 24' fill='none' {...props}>
      <Path
        d='M15.085 17.584c1.902-.772 3.232-2.534 3.232-4.584 0-4-5.387-10-5.387-10S7.542 9 7.542 13c0 2.05 1.33 3.812 3.233 4.584V21h4.31v-3.416z'
        stroke={color}
      />
      <Path d='M12.93 3v8' stroke='#9B51E0' strokeLinejoin='round' />
      <Ellipse
        cx={12.9296}
        cy={12}
        rx={1.07747}
        ry={1}
        stroke={color}
        strokeLinecap='round'
      />
    </Svg>
  );
}

export default SvgComponent;
