import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const LogOutSettings = (props: SvgProps) => {
  return (
    <Svg fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
      <Path
        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
        stroke="#F9FAFB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}
