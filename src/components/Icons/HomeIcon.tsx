import type { FC } from 'react';
import { memo } from 'react';
import { Path, Svg } from 'react-native-svg';
import type { Props } from './types';

const LocationIcon: FC<Props> = ({ color = '#5856D6', ...props }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
    />
    <Path
      d="M5 12l-2 0l9 -9l9 9l-2 0"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default memo(LocationIcon);
