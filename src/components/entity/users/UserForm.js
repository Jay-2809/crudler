import { useState } from "react";
import { StyleSheet } from "react-native";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";
import useLoad from "../../API/useLoad.js";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL: null,
  UserType: "Student" || "Staff",
  UserYear: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  const [user, setUser] = useState(originalUser || defaultUser);

  const roles = [
    { value: "Staff", label: "Staff" },
    { value: "Student", label: "Student" },
  ];

  const years = [
    { value: "2022 - 23", label: "2022-23" },
    { value: "2023 - 24", label: "2023-24" },
  ];

  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  const submitLabel = originalUser ? "Modify" : "Add";
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="First name"
        value={user.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
      />

      <Form.InputText
        label="Last name"
        value={user.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
      />

      <Form.InputText
        label="Email"
        value={user.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
      />

      <Form.InputSelect
        label="User type"
        prompt="Select user type..."
        options={roles}
        value={user.UserType}
        onChange={(value) => handleChange("UserType", value)}
      />

      <Form.InputSelect
        label="User year"
        prompt="Select user year..."
        options={years}
        value={user.UserYear}
        onChange={(value) => handleChange("UserYear", value)}
      />

      <Form.InputText
        label="User image URL"
        value={user.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
