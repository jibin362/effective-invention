import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
import { useAppContext } from "../../context/AppContext";

export default function Home() {
  const { names } = useAppContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.wrapper}>
        <Text style={styles.header}>List</Text>
        {names.map((obj) => (
          <Card key={obj.id} id={obj.id} name={obj.name} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: "center",
  },
  header: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
  },
  wrapper: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    gap: 10,
  },
  title: {
    fontSize: 12,
    letterSpacing: 0.24,
    paddingBottom: 24,
  },
});
