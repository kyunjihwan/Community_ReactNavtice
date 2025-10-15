import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
      <TextInput
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        style={styles.input}
      />
      <Button
        title="버튼이름"
        onPress={() => {
          console.log("pressed!");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    color: "red",
  },
  text: {
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});
