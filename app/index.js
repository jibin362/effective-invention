import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const router = useRouter();

  async function prepare() {
    const value = await AsyncStorage.getItem("pin");
    router.replace(value ? "/home" : "/auth/login");
  }

  useEffect(() => {
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <Text>Can add a indicator or logo here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
