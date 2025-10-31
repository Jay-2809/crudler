import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm";

const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  const handleCancel = navigation.goBack;

  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
