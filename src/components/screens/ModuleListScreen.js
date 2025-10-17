import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  const modules = initialModules;
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`);
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />

      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
