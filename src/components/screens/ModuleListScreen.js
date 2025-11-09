import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  const [modules, setModules] = useState(initialModules);

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID == updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    //navigation.navigate("ModuleListScreen");
    //navigation.popToTop();
    navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
