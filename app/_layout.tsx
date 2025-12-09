import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#4a90e2" },
        headerTintColor: "white",
        headerTitleStyle: { color: "white" },
      }}
    />
  );
}
