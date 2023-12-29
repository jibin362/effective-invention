import { Slot } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Slot />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
});
