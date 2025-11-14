import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem.js";

const ModuleList = ({ modules, onSelect, onFavourite }) => {
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleID}
            module={module}
            onSelect={onSelect}
            onFavourite={onFavourite}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
