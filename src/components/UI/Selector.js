import { Pressable, Vibration } from "react-native";

const Selector = ({ children, onPress, style, pressedStyle }) => {
  const handlePress = () => {
    Vibration.vibrate(5);
    onPress();
  };
  return (
    <Pressable
      onLongPress={handlePress}
      style={({ pressed }) => [style, pressed && pressedStyle]}
    >
      {children}
    </Pressable>
  );
};

export default Selector;
