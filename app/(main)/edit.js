import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";

export default function About() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { updateNames } = useAppContext();
  const [value, setValue] = useState(params.name);
  const isDisabled = value === "";

  const onSave = () => {
    updateNames(params.id, value);
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Edit <Text style={styles.inner}>{params.name}</Text>
      </Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <View style={styles.buttonWrapper}>
        <Link href="/home" asChild>
          <CustomButton label="Cancel" type="cancel" />
        </Link>
        <CustomButton label="Save" onPress={onSave} disabled={isDisabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
  },
  inner: {
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#000",
    marginVertical: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 10,
  },
});
