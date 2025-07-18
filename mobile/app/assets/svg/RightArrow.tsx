import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const RightArrow = (props: SvgProps) => {
  return (
    <Svg fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
      <Path
        d="M9 5l6 7-6 7"
        stroke={props.color ?? '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  )
}
