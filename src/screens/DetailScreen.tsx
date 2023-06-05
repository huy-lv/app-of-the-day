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
import { ScreenSize } from "../constants/Constant";
import { SharedElement } from "react-navigation-shared-element";
import { Spacing } from "../constants/Spacing";
import Animated, { FadeIn } from "react-native-reanimated";

interface Game {
  icon: ImageSourcePropType;
  title: string;
  name: string;
  cat: string;
}

const Games = Array(10).fill({
  icon: require("../../assets/img/summer1.jpg"),
  title: "Apple Arcade",
  name: "TMNT Splintered Fate",
  cat: "Hành động",
});

export default function DetailScreen({ navigation, route }: NavigationProps) {
  const item = route.params.item;

  const renderItem = (item: Game, index: number) => {
    return (
      <Animated.View
        key={index}
        entering={FadeIn.delay(index * 100 + 400)}
        style={{
          flexDirection: "row",
          paddingHorizontal: Spacing.medium,
          paddingBottom: Spacing.medium,
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 60, height: 60, borderRadius: Spacing.small }}
        />
        <View
          style={{
            justifyContent: "space-between",
            marginLeft: Spacing.medium,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.title}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
          <Text style={{ fontWeight: "bold", color: "gray" }}>{item.cat}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: Spacing.medium,
            backgroundColor: "#edecf4",
            alignSelf: "center",
            padding: Spacing.tiny,
            paddingHorizontal: Spacing.small,
          }}
        >
          <Text style={{ color: "#0871ed", fontWeight: "bold" }}>NHẬN</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={CommonStyle.flex1}>
      <ScrollView style={[CommonStyle.flex1, { backgroundColor: "white" }]}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.src}
            style={{ width: ScreenSize.width, height: ScreenSize.width }}
            resizeMode="cover"
          />
        </SharedElement>
        <SharedElement id={`item.${item.id}.title`}>
          <View
            style={{
              margin: Spacing.medium,
              marginRight: 3 * Spacing.medium,
            }}
          >
            <Text style={{ color: "gray", fontWeight: "bold" }}>
              HÃY CÙNG CHƠI
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              20 Game Mới Cập Bến Apple Arcade
            </Text>
          </View>
        </SharedElement>
        {Games.map(renderItem)}
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
