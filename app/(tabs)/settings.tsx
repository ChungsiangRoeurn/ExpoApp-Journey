import useTheme from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      {/* Section Title */}
      <Text style={styles.sectionTitle}>Appearance</Text>

      {/* Dark Mode Item */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>

        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },
  settingText: {
    fontSize: 16,
  },
});
