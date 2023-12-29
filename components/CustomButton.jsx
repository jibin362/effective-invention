import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({ label, onPress, type, disabled }) {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        type === "cancel" ? styles.cancel : styles.submit,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  submit: {
    backgroundColor: "green",
  },
  cancel: {
    backgroundColor: "red",
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  disabled: {
    opacity: 0.5,
  },
});

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(["submit", "cancel"]),
  disabled: PropTypes.bool,
};

export default CustomButton;
