import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const CircleHelp = (props: SvgProps) => {
  return (
    <Svg fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
      <Path
        d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        stroke="#F9FAFB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}
