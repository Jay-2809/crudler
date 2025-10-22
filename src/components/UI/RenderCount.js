import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RenderCount = ({
  backgroundColor = "dodgerblue",
  fontColor = "white",
}) => {
  const RenderCount = useRef(0);
  RenderCount.current += 1;

  return (
    <Text style={[styles.count, { backgroundColor, color: fontColor }]}>
      Number of renders: {RenderCount.current}
    </Text>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 5,
  },
});

export default RenderCount;
