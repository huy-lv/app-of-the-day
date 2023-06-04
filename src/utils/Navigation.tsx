import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Post } from "../screens/HomeScreen";

export type RootStackType = {
  Home: undefined;
  Detail: { item: Post };
};

export interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackType>;
  route: any;
}
