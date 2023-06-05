import { FlashList, ListRenderItem } from "@shopify/flash-list";
import {
  ImageSourcePropType,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { ScreenSize } from "../constants/Constant";
import { NavigationProps } from "../utils/Navigation";
import { SharedElement } from "react-navigation-shared-element";
import { Spacing } from "../constants/Spacing";
import Header from "../components/Header";
import { Image } from "expo-image";

const Images = [
  {
    src: require("../../assets/img/summer1.jpg"),
    id: 1,
  },
  {
    src: require("../../assets/img/summer2.jpg"),
    id: 2,
  },
  {
    src: require("../../assets/img/summer3.jpg"),
    id: 3,
  },
  {
    src: require("../../assets/img/summer4.jpg"),
    id: 4,
  },
];

export interface Post {
  id: number;
  src: ImageSourcePropType;
}

export default function HomeScreen({ navigation }: NavigationProps) {
  const renderItem: ListRenderItem<Post> = ({ item, index }) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <View
        style={[
          styles.card,
          {
            margin: Spacing.medium,
            backgroundColor: "white",
            borderRadius: 16,
          },
        ]}
      >
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.src}
            style={{
              width: ScreenSize.width - 2 * Spacing.medium,
              height: ScreenSize.width - 2 * Spacing.medium,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
        </SharedElement>
        <View style={{ margin: Spacing.medium }}>
          <SharedElement id={`item.${item.id}.title`}>
            <View>
              <Text style={{ color: "gray", fontWeight: "bold" }}>
                HÃY CÙNG CHƠI
              </Text>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                20 Game Mới Cập Bến Apple Arcade
              </Text>
            </View>
          </SharedElement>
          <Text style={{ color: "#a8a8a8", fontWeight: "bold" }}>
            Chơi cùng nhân vật Disney và hơn thế trong các game yêu thích.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        data={Images}
        estimatedItemSize={313}
        contentContainerStyle={{ paddingTop: 44 }}
        ListHeaderComponent={Header}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
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
