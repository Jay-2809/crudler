import { StyleSheet } from "react-native";
import UserView from "../entity/users/UserView";
import Screen from "../layout/Screen";

const UserViewScreen = ({ navigation, route }) => {
  const { user, onDelete, onModify } = route.params;

  const gotoModifyScreen = () =>
    navigation.replace("UserModifyScreen", { user, onModify });

  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotoModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
