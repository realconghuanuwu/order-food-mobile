import FoodCard from "@/components/home/components/FoodCard";
import SearchBar from "@/components/home/components/SearchBar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "../../components/home/components/CategoryList";
import Header from "../../components/home/components/Header";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <SearchBar />
      <CategoryList />
      <FlatList
        data={mockData}
        renderItem={({ item }) => <FoodCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          marginStart: 20,
          marginBottom: 20,
        }}
      />
    </SafeAreaView>
  );
}

const mockData = [
  {
    id: 1,
    name: "Com Ga Xoi Mo",
    price: 100000,
    imageUrl:
      "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/1:1/w_2560%2Cc_limit/the-ultimate-hamburger.jpg",
  },
  {
    id: 2,
    name: "Com Ga Xoi Mo",
    price: 100000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENYnRh013tE7LrJCY-j0pTDFoJzJZtAx8qw&s",
  },
  {
    id: 3,
    name: "Com Ga Xoi Mo",
    price: 100000,
    imageUrl:
      "https://product.hstatic.net/200000291375/product/item_01_06ee15b90f6d41198cb71e8c7df2f235_master.jpg",
  },
];
