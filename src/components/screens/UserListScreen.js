import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import useLoad from "../API/useLoad.js";
import UseStore from "../store/useStore.js";
import API from "../API/API.js";
import Screen from "../layout/Screen.js";
import RenderCount from "../UI/RenderCount.js";
import UserList from "../entity/users/UserList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button";

const UserListScreen = ({ navigation }) => {
  const usersEndpoint = "https://softwarehub.uk/unibase/api/users";
  const loggedinUserKey = "loggedinUser";

  const [users, , isLoading, loadUsers] = useLoad(usersEndpoint);
  const [loggedinUser] = UseStore(loggedinUserKey, null);

  const onDelete = async (user) => {
    const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.delete(deleteEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (user) => {
    const result = await API.post(usersEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (user) => {
    const putEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.put(putEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const gotoAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });
  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });

  return (
    <Screen>
      <RenderCount />
      {loggedinUser && (
        <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
      )}
      <ButtonTray>
        <Button label="Add User" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && (
        <View style={styles.spinner}>
          <Text>Retrieving records from {usersEndpoint} ... </Text>

          <ActivityIndicator size="large" />
        </View>
      )}

      <UserList users={users} onSelect={gotoViewScreen} />
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

export default UserListScreen;
