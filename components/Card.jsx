import { useRouter } from "expo-router";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Card({ id, name }) {
  const router = useRouter();

  const onPress = () => {
    router.push({
      pathname: "/edit",
      params: {
        id,
        name,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
  },
});

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
