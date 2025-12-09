import { useAuthStore } from "@/lib/store/authStore";
import { Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [ready, setReady] = useState(false);
  const token = useAuthStore((s) => s.token);

  useEffect(() => {
    setTimeout(async () => {
      setReady(true);
      await SplashScreen.hideAsync();
    }, 1500);
  }, []);

  if (!ready)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4a90e2",
        }}
      >
        <Text style={{ fontSize: 32, color: "white", fontWeight: "bold" }}>
          Welcome to 1965.Store
        </Text>
        <ActivityIndicator
          size="large"
          color="white"
          style={{ marginTop: 20 }}
        />
      </View>
    );

  // If user is logged in → redirect to shop tabs
  if (token) return <Redirect href="/(tabs)" />;

  // Otherwise show login screen
  return <Redirect href="/login" />;
}
