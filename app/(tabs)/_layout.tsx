import TabIcon from "@/components/TabIcon";
import { Tabs } from "expo-router";
import {
  HeartIcon,
  HouseIcon,
  MessageCircle,
  UserIcon,
} from "lucide-react-native";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ef2a39",
          height: 80,
          paddingTop: 20,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={({ navigation }) => ({
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <TabIcon icon={<HouseIcon color="white" />} focused={focused} />
          ),
        })}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={<UserIcon color="white" />} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          title: "Chat",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={<MessageCircle color="white" />} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={<HeartIcon color="white" />} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
