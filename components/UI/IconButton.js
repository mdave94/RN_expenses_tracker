import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Custom Button component
function IconButton({ iconName, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedStyle}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressedStyle: {
    opacity: 0.75,
  },
});
