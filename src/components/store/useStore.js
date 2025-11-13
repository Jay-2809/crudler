import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UseStore = (key, initialRecord) => {
  const [record, setRecord] = useState(initialRecord);

  const loadRecord = async () => {
    try {
      const recoveredJSON = await AsyncStorage.getItem(key);
      if (recoveredJSON != null) {
        const record = JSON.parse(recoveredJSON);
        setRecord(record);
      }
    } catch (error) {
      Alert.alert(`Error loading ${key} record: ${error}`);
    }
  };

  const saveRecord = async (newRecord) => {
    try {
      const encodedRecord = JSON.stringify(newRecord);
      await AsyncStorage.setItem(key, encodedRecord);
      setRecord(newRecord);
    } catch (error) {
      Alert.alert(`Error loading ${key} record: ${error}`);
    }
  };

  useEffect(() => {
    loadRecord();
  }, []);

  return [record, saveRecord];
};
export default UseStore;
