import { ReactNode } from "react";
import { View } from "react-native";

export default function TabIcon({
  icon,
  focused,
}: {
  icon: ReactNode;
  focused: boolean;
}) {
  return (
    <View className="flex-col items-center justify-center">
      <View className="p-3 bg-c-primary text-white rounded-full">{icon}</View>
      {focused && <View className="size-2 bg-white rounded-full" />}
    </View>
  );
}
