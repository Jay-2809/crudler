import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icons from "./Icons.js";
import { Button, ButtonTray } from "./Button.js";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>
        {children}
      </ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.itemTextInput}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  const selectListData = options.map((option) => ({
    key: option.value,
    value: option.label,
  }));

  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <SelectList
        setSelected={onChange}
        data={selectListData}
        placeholder={prompt}
        defaultOption={selectListData.find((item) => item.key === value)}
        boxStyles={styles.selectListDropdownStyle}
      />
    </View>
  );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  formItems: {
    gap: 5,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingleft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  selectListBoxStyle: {
    height: 50,
    backgroundColor: "whitesmoke",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingLeft: 10,
    paddingTop: 15,
  },
  selectListDropdownStyle: {
    borderColor: "lightgrey",
  },
});

export default Form;
