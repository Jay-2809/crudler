import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserForm from "../entity/users/UserForm";

const UserAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  const handleCancel = navigation.goBack;

  return (
    <Screen>
      <UserForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserAddScreen;
