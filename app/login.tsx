import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleLogin = () => {
    // Here you can call your fake store API:
    // fetch('https://fakestoreapi.com/auth/login', {...})
    // For demo, just use dummy token
    if (username && password) {
      login("fake-token");
      router.replace("/(tabs)"); // redirect to shop
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          width: "100%",
          padding: 15,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: "100%",
          padding: 15,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          width: "100%",
          padding: 15,
          backgroundColor: "#4a90e2",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
