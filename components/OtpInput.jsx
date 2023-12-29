import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const maximumLength = 4;

export default function OtpInput({ setValue }) {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();
  const [code, setCode] = useState("");
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const box = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View
        key={index}
        style={[
          styles.otpBox,
          isInputBoxFocused && isValueFocused && styles.otpBoxFocussed,
        ]}
      >
        <Text style={styles.otpText}>{digit}</Text>
      </View>
    );
  };

  useEffect(() => {
    if (code.length === 4) {
      setValue(code);
    }
  }, [code]);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={setCode}
        onBlur={handleOnBlur}
        maxLength={4}
        keyboardType="number-pad"
        style={styles.textInput}
      />
      <Pressable onPress={handleOnPress} style={styles.otpWrapper}>
        {boxArray.map(box)}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "start",
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    position: "absolute",
    opacity: 0,
  },
  otpWrapper: {
    width: "80%",
    flexDirection: "row",
    columnGap: 20,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: "rgba(84, 84, 84, 0.33)",
    borderRadius: 5,
    padding: 8,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  otpBoxFocussed: {
    borderColor: "#F57F25",
  },
  otpText: {
    fontSize: 16,
    color: "#F57F25",
  },
});
