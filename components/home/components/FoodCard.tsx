import { Image, Text, TouchableOpacity, View } from "react-native";

interface FoodCardProps {
  name: string;
  price: number;
  imageUrl: string;
  rating?: number;
}

export default function FoodCard({
  name,
  price,
  imageUrl,
  rating = 4.9,
}: FoodCardProps) {
  return (
    <TouchableOpacity className="w-[45%] bg-white rounded-lg p-4 shadow-2xl">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="w-full h-40 rounded-lg"
      />
      <View className="flex-1">
        <Text className="text-lg font-bold">{name}</Text>
        <View className="flex-row items-center gap-2">
          <Text className="text-lg font-bold text-yellow-500">★ {rating}</Text>
        </View>
        <Text className="text-lg font-bold">${(price / 1000).toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
