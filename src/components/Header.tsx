import dayjs from "dayjs";
import { View, Text, Image } from "react-native";
import { Spacing } from "../constants/Spacing";
require("dayjs/locale/vi");

export default function Header() {
  return (
    <View
      style={{
        marginHorizontal: Spacing.medium,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          {dayjs().locale("vi").format("dddd, D MMMM").toUpperCase()}
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hôm nay</Text>
      </View>
      <Image
        source={require("../../assets/img/summer4.jpg")}
        style={{ width: 40, height: 40, borderRadius: 20 }}
        resizeMode="cover"
      />
    </View>
  );
}
