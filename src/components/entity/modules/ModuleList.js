import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem.js";

const ModuleList = ({ modules, onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onSelect={onSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
