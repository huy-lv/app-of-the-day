import {
  ImageSourcePropType,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CommonStyle } from "../utils/CommonStyle";
import { NavigationProps } from "../utils/Navigation";
import { ScreenSize } from "../Constant";
import { SharedElement } from "react-navigation-shared-element";

const Games = Array(10).fill({
  icon: require("../../assets/img/summer1.jpg"),
  name: "Game",
});

export default function DetailScreen({ navigation, route }: NavigationProps) {
  const item = route.params.item;

  return (
    <View style={CommonStyle.flex1}>
      <ScrollView style={CommonStyle.flex1}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.src}
            style={{ width: ScreenSize.width, height: ScreenSize.width }}
          />
        </SharedElement>
        <SharedElement id={`item.${item.id}.title`}>
          <View style={{ padding: 24 }}>
            <Text style={{ color: "gray", fontWeight: "bold" }}>
              HÃY CÙNG CHƠI
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              20 Game Mới Cập Bến Apple Arcade
            </Text>
          </View>
        </SharedElement>
      </ScrollView>
      <TouchableOpacity
        style={{ position: "absolute", top: 56, right: 16 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="closecircle" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    paddingVertical: 44,
  },
});
