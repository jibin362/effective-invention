import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OtpInput from "../../components/OtpInput";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const onDone = async (pin) => {
    if (pin !== "1234") {
      setError("Invalid pin entered.");
      return;
    }
    await AsyncStorage.setItem("pin", pin);
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome To</Text>
      <Text style={styles.header}>Test App</Text>
      <Text style={styles.otpTitle}>Enter PIN</Text>
      <OtpInput setValue={onDone} />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  header: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
  },
  otpTitle: {
    fontWeight: 400,
    fontSize: 12,
    marginVertical: 20,
  },
  error: {
    fontWeight: 600,
    fontSize: 16,
    color: "red",
    marginTop: 20,
  },
});
