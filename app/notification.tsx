import { FlatList, StyleSheet, Text, View } from "react-native";

const MOCK_NOTIFICATIONS = [
  { id: 1, message: "Your order #1234 has been shipped." },
  { id: 2, message: "New promo: 20% off all electronics!" },
  { id: 3, message: "Your cart is waiting for you!" },
  { id: 4, message: "Welcome back! Check out our new products." },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={MOCK_NOTIFICATIONS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No notifications yet.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f9", padding: 15 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  notificationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  message: { fontSize: 14, color: "#333" },
});
