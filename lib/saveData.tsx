import AsyncStorage from '@react-native-async-storage/async-storage';

const _saveData = async (data: UserData) => {
  try {
    await AsyncStorage.setItem('@storage_Key', JSON.stringify(data));
    return { success: true };
  } catch (e) {
    return { success: false, error: e };
  }
};

export default _saveData;
