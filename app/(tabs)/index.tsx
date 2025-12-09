import { useCartStore } from "@/lib/store/cartStore";
import { Product } from "@/lib/types";
import { getProducts } from "@/services/products";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 20;

const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    icon: "https://img.icons8.com/color/48/000000/electronics.png",
  },
  {
    id: 2,
    name: "Clothes",
    icon: "https://img.icons8.com/color/48/000000/t-shirt.png",
  },
  {
    id: 3,
    name: "Shoes",
    icon: "https://img.icons8.com/color/48/000000/shoes.png",
  },
  {
    id: 4,
    name: "Home",
    icon: "https://img.icons8.com/color/48/000000/home.png",
  },
];

const PROMOS = [
  "https://via.placeholder.com/400x150/4a90e2/ffffff?text=Promo+1",
  "https://via.placeholder.com/400x150/f39c12/ffffff?text=Promo+2",
  "https://via.placeholder.com/400x150/27ae60/ffffff?text=Promo+3",
];

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.card} onPress={() => addToCart(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.cartBtn} onPress={() => addToCart(item)}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f6f7f9" }}>
      {/* PROMO BANNER */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.promoContainer}
      >
        {PROMOS.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.promo} />
        ))}
      </ScrollView>

      {/* CATEGORIES */}
      <View style={styles.categoriesContainer}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.categoryCard}>
            <Image source={{ uri: cat.icon }} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PRODUCTS */}
      <Text style={styles.sectionTitle}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        numColumns={2}
        scrollEnabled={false} // nested scroll
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  promoContainer: { marginVertical: 10, paddingLeft: 10 },
  promo: {
    width: width - 40,
    height: 150,
    borderRadius: 12,
    marginRight: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  categoryCard: {
    backgroundColor: "#fff",
    width: 70,
    height: 90,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    elevation: 2,
  },
  categoryIcon: { width: 40, height: 40, marginBottom: 5 },
  categoryText: { fontSize: 12, textAlign: "center" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: CARD_WIDTH,
    margin: 5,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#2ecc71",
    fontWeight: "bold",
    marginBottom: 8,
  },
  cartBtn: {
    backgroundColor: "#4a90e2",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  cartText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
});
