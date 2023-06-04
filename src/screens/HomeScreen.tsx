import { FlashList, ListRenderItem } from "@shopify/flash-list";
import {
  ImageSourcePropType,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { ScreenSize } from "../Constant";
import { NavigationProps } from "../utils/Navigation";
import { SharedElement } from "react-navigation-shared-element";

const Images = [
  {
    src: require("../../assets/img/summer1.jpg"),
    id: 1,
  },
  {
    src: require("../../assets/img/summer1.jpg"),
    id: 2,
  },
  {
    src: require("../../assets/img/summer1.jpg"),
    id: 3,
  },
];

export interface Post {
  id: number;
  src: ImageSourcePropType;
}

export default function HomeScreen({ navigation }: NavigationProps) {
  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <View
        style={[
          styles.card,
          {
            margin: ScreenSize.width * 0.05,
            backgroundColor: "white",
            borderRadius: 16,
          },
        ]}
      >
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.src}
            style={{
              width: ScreenSize.width * 0.9,
              height: ScreenSize.width * 0.9,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
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
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <FlashList
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        data={Images}
        estimatedItemSize={313}
      />
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
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,

    elevation: 5,
  },
});
