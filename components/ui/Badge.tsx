import { cn } from "@/utils/tailwind-merge";
import { Text, TouchableOpacity } from "react-native";

interface BadgeProps {
  title: string;
  onPress?: () => void;
  isActive?: boolean;
}

export default function Badge({ title, onPress, isActive }: BadgeProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "rounded-2xl ms-2 px-8 py-4 bg-[#f3f4f6]",
        isActive && "bg-c-primary"
      )}
    >
      <Text
        className={cn(
          "text-c-gray font-poppins-regular text-lg",
          isActive && "text-white"
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
