import { AsyncStorage } from "react-native";

export const set = async ({key, value}) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    // Error saving data - Do something with error
    return false;
  }
}

export const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
      return value;
    }
   } catch (error) {
     // Error saving data - Do something with error
     return false;
   }
}
