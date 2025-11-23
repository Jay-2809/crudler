import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserForm from "../entity/users/UserForm.js";

const UserModifyScreen = ({ navigation, route }) => {
  const { user, onModify } = route.params;

  const handleCancel = navigation.goBack;

  return (
    <Screen>
      <UserForm
        originalUser={user}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserModifyScreen;
