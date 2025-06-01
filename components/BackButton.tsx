import { ArrowLeftIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export default function BackButton({ navigation }: { navigation: any }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeftIcon color="white" />
    </TouchableOpacity>
  );
}
