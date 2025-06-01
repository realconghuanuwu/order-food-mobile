import { MenuIcon, SearchIcon } from "lucide-react-native";

import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar() {
  return (
    <View className="flex flex-row mx-4 gap-2 my-10">
      <View className="flex-1 flex flex-row items-center gap-2 bg-white shadow-md rounded-2xl py-2 px-4">
        <SearchIcon color="gray" />
        <TextInput
          className="flex-1 text-c-gray font-poppins-regular"
          placeholder="Search"
        />
      </View>
      <TouchableOpacity className="bg-c-primary p-4 rounded-2xl">
        <MenuIcon color="white" />
      </TouchableOpacity>
    </View>
  );
}
