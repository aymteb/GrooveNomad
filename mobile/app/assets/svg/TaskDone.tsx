import React from "react";
import { Path, Svg } from "react-native-svg";

interface TaskDoneProps {
  width: number;
  height: number;
  color: string;
}

export const TaskDone = ({ width, height, color }: TaskDoneProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        id="Vector"
        d="M3 17.5681L5 19.5681L9 15.5681M13 6.56812H21M13 12.5681H21M13 18.5681H21M4 5.56812H8C8.55228 5.56812 9 6.01583 9 6.56812V10.5681C9 11.1204 8.55228 11.5681 8 11.5681H4C3.44772 11.5681 3 11.1204 3 10.5681V6.56812C3 6.01583 3.44772 5.56812 4 5.56812Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
