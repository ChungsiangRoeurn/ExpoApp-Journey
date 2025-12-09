import { useAuthStore } from "@/lib/store/authStore";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#4a90e2",
        },
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
        },
        headerTintColor: "white",

        headerRight: () => {
          const logout = useAuthStore((s) => s.logout);
          const router = useRouter();

          return (
            <View style={{ flexDirection: "row", marginRight: 15, gap: 15 }}>
              <TouchableOpacity onPress={() => console.log("Notifications")}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  logout();
                  router.replace("/login");
                }}
              >
                <Ionicons name="log-out-outline" size={28} color="white" />
              </TouchableOpacity>
            </View>
          );
        },

        // ⭐ LEFT SIDE ICON (optional menu button)
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => console.log("Menu pressed")}
            style={{ marginLeft: 15 }}
          >
            {/* <Ionicons name="menu-outline" size={28} color="white" /> */}
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="product" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
