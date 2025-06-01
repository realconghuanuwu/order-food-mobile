import { images } from "@/constants/image";
import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex flex-row mx-4 mt-4">
      <View className="flex-1">
        <Text className="text-5xl font-bold text-c-secondary font-sans">
          Food Go
        </Text>
        <Text className="text-xl text-c-gray font-poppins-regular">
          Order food your favorite food
        </Text>
      </View>
      <Image source={images.USER} className="size-12 rounded-full" />
    </View>
  );
}
