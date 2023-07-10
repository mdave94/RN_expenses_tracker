import { View, Text, TextInput } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>Label</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}
