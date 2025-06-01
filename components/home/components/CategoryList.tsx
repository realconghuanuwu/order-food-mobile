import Badge from "@/components/ui/Badge";
import { ScrollView } from "react-native";

export default function CategoryList() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-none mb-8"
    >
      <Badge title="All" isActive />
      <Badge title="Combos" />
      <Badge title="Burgers" />
      <Badge title="Pizza" />
      <Badge title="Salads" />
      <Badge title="Sides" />
      <Badge title="Drinks" />
    </ScrollView>
  );
}
