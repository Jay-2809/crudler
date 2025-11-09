import { StyleSheet } from "react-native";
import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigation, route }) => {
  const { module, onDelete, onModify } = route.params;

  const gotoModifyScreen = () =>
    navigation.replace("ModuleModifyScreen", { module, onModify });

  return (
    <Screen>
      <ModuleView
        module={module}
        onDelete={onDelete}
        onModify={gotoModifyScreen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
