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
import { Spacing } from "../constants/Spacing";
import Header from "../components/Header";
import Animated from "react-native-reanimated";

const Images = Array(20)
  .fill(1)
  .map((i, index) => ({
    src: require("../../assets/img/summer2.jpg"),
    id: index,
  }));

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
        <Animated.Image
          source={item.src}
          style={{
            width: ScreenSize.width - 2 * Spacing.medium,
            height: ((ScreenSize.width - 2 * Spacing.medium) * 3) / 4,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          sharedTransitionTag={`item.${item.id}.image`}
        />
        <View style={{ margin: Spacing.medium }}>
          <Animated.View sharedTransitionTag={`item.${item.id}.title`}>
            <Text style={{ color: "gray", fontWeight: "bold" }}>
              HÃY CÙNG CHƠI
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              20 Game Mới Cập Bến Apple Arcade
            </Text>
          </Animated.View>
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
