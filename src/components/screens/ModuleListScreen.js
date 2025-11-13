import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import useLoad from "../API/useLoad.js";
import UseStore from "../store/useStore.js";
import API from "../API/API.js";
import Screen from "../layout/Screen";
import RenderCount from "../UI/RenderCount.js";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const ModuleListScreen = ({ navigation }) => {
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";
  const loggedinUserKey = "loggedinUser";

  const [modules, , isLoading, loadModules] = useLoad(modulesEndpoint);
  const [loggedinUser, saveLoggedinUser] = UseStore(loggedinUserKey, null);

  const onDelete = async (module) => {
    const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.delete(deleteEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (module) => {
    const result = await API.post(modulesEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (module) => {
    const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.navigate("ModuleListScreen", { module, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  return (
    <Screen>
      <RenderCount />
      {loggedinUser && (
        <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
      )}
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>

      {isLoading && (
        <View style={styles.spinner}>
          <Text>Retrieving records from {modulesEndpoint} ... </Text>
          <ActivityIndicator size="large" />
        </View>
      )}

      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};
const styles = StyleSheet.create({
  welcome: {
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    gap: 15,
  },
  loading: {
    height: 100,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModuleListScreen;
