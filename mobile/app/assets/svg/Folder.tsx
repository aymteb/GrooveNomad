import React from "react";
import { Path, Svg } from "react-native-svg";

interface FolderProps {
  width: number;
  height: number;
  color: string;
}

export const Folder = ({ width, height, color }: FolderProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
      <Path
        id="Vector"
        d="M20.5 20.5681C21.0304 20.5681 21.5391 20.3574 21.9142 19.9823C22.2893 19.6073 22.5 19.0985 22.5 18.5681V8.56812C22.5 8.03768 22.2893 7.52897 21.9142 7.1539C21.5391 6.77883 21.0304 6.56812 20.5 6.56812H12.6C12.2655 6.57139 11.9355 6.49073 11.6403 6.3335C11.3451 6.17626 11.094 5.94749 10.91 5.66812L10.1 4.46812C9.91789 4.19159 9.66997 3.96459 9.3785 3.80751C9.08702 3.65043 8.76111 3.56817 8.43 3.56812H4.5C3.96957 3.56812 3.46086 3.77883 3.08579 4.1539C2.71071 4.52897 2.5 5.03768 2.5 5.56812V18.5681C2.5 19.0985 2.71071 19.6073 3.08579 19.9823C3.46086 20.3574 3.96957 20.5681 4.5 20.5681H20.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
