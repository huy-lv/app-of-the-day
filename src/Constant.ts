import { Dimensions } from "react-native";

const d = Dimensions.get("window");

export const ScreenSize = {
  width: d.width,
  height: d.height,
};
