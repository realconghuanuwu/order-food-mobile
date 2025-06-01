import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../styles/index.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
