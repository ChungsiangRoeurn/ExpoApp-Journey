import { useCartStore } from "@/lib/store/cartStore";
import { Product } from "@/lib/types";
import { getProductById } from "@/services/products";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    if (id) getProductById(id as string).then(setProduct);
  }, [id]);

  if (!product)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={{ marginTop: 10 }}>Loading product...</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, backgroundColor: "#f6f7f9" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <Image
          source={{ uri: product.image }}
          style={{
            width: "100%",
            height: 350,
            resizeMode: "contain",
            backgroundColor: "#fff",
          }}
        />

        {/* Product Info */}
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            marginTop: -20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
            {product.title}
          </Text>

          <Text style={{ fontSize: 26, color: "#2ecc71", fontWeight: "bold" }}>
            ${product.price}
          </Text>

          <View
            style={{
              height: 1,
              backgroundColor: "#ececec",
              marginVertical: 20,
            }}
          />

          <Text style={{ fontSize: 16, color: "#555", lineHeight: 22 }}>
            {product.description}
          </Text>
        </View>
      </ScrollView>

      {/* Floating Add to Cart button */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
          padding: 15,
          borderTopWidth: 1,
          borderColor: "#eee",
        }}
      >
        <TouchableOpacity
          onPress={() => addToCart(product)}
          style={{
            backgroundColor: "#4a90e2",
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
