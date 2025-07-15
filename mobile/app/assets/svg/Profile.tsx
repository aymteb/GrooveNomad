import React from "react";
import { Path, Svg } from "react-native-svg";

interface ProfileProps {
  width: number;
  height: number;
  color: string;
}

export const Profile = ({ width, height, color }: ProfileProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        id="Vector"
        d="M12 13.5681C14.7614 13.5681 17 11.3295 17 8.56812C17 5.80669 14.7614 3.56812 12 3.56812C9.23858 3.56812 7 5.80669 7 8.56812C7 11.3295 9.23858 13.5681 12 13.5681ZM12 13.5681C14.1217 13.5681 16.1566 14.411 17.6569 15.9113C19.1571 17.4116 20 19.4464 20 21.5681M12 13.5681C9.87827 13.5681 7.84344 14.411 6.34315 15.9113C4.84285 17.4116 4 19.4464 4 21.5681"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
