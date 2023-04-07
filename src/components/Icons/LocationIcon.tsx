import type { FC } from 'react';
import { memo } from 'react';
import { Path, Svg } from 'react-native-svg';
import type { Props } from './types';

const LocationIcon: FC<Props> = ({ color = '#5856D6', ...props }) => (
  <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M21.702 15.816c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226S.187 8.804 1.115 7.198c.581-1.004 3.26-.642 6.856.734"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M13.5 22.666A8.333 8.333 0 1013.5 6a8.333 8.333 0 000 16.666z"
      stroke={color}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default memo(LocationIcon);
