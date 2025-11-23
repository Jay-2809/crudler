import { StyleSheet, Text, View } from "react-native";
import Selector from "../../UI/Selector";

const UserItem = ({ user, onSelect }) => {
  const handleSelect = () => onSelect(user);

  return (
    <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {user.UserFirstname} {user.UserLastname} ({user.UserUsertypeName})
        </Text>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    paddingLeft: 10,
  },
  pressedItem: {
    backgroundColor: "azure",
  },
});

export default UserItem;
