import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  const modules = initialModules;
  const handleSelect = () => alert("Item selected");
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable key={module.ModuleCode} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {module.ModuleCode}
                  {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    PaddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleListScreen;
