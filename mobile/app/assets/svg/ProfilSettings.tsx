import React from "react";
import { Path, Svg } from "react-native-svg";

interface ProfilSettingsProps {
  width: number;
  height: number;
  color: string;
}

export const ProfilSettings = ({
  width,
  height,
  color,
}: ProfilSettingsProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        id="Vector"
        d="M2 21.5681C2.00012 20.3091 2.29739 19.0678 2.86766 17.9454C3.43792 16.8229 4.26506 15.8508 5.28182 15.1083C6.29858 14.3657 7.47624 13.8737 8.71904 13.6721C9.96183 13.4705 11.2347 13.565 12.434 13.9481M19.5 14.8682L19.1 15.7682M16.9 21.3682L16.5 22.2682M21.7001 20.0682L20.8 19.6682M15.2 17.4681L14.3 17.0681M21.7001 17.0681L20.8 17.4681M15.2 19.6682L14.3 20.0682M19.5 22.2682L19.1 21.3682M16.9 15.7682L16.5 14.8682M15 8.56812C15 11.3295 12.7614 13.5681 10 13.5681C7.23858 13.5681 5 11.3295 5 8.56812C5 5.80669 7.23858 3.56812 10 3.56812C12.7614 3.56812 15 5.80669 15 8.56812ZM21 18.5681C21 20.225 19.6569 21.5681 18 21.5681C16.3431 21.5681 15 20.225 15 18.5681C15 16.9113 16.3431 15.5681 18 15.5681C19.6569 15.5681 21 16.9113 21 18.5681Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
