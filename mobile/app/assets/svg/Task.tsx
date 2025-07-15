import React from "react";
import { Path, Svg } from "react-native-svg";

interface TaskProps {
  width: number;
  height: number;
  color: string;
}

export const Task = ({ width, height, color }: TaskProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        id="Vector"
        d="M14 4.56812H21M14 9.56812H21M14 15.5681H21M14 20.5681H21M4 3.56812H9C9.55228 3.56812 10 4.01583 10 4.56812V9.56812C10 10.1204 9.55228 10.5681 9 10.5681H4C3.44772 10.5681 3 10.1204 3 9.56812V4.56812C3 4.01583 3.44772 3.56812 4 3.56812ZM4 14.5681H9C9.55228 14.5681 10 15.0158 10 15.5681V20.5681C10 21.1204 9.55228 21.5681 9 21.5681H4C3.44772 21.5681 3 21.1204 3 20.5681V15.5681C3 15.0158 3.44772 14.5681 4 14.5681Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
