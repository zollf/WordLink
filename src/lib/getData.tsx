import AsyncStorage from '@react-native-async-storage/async-storage';

const _getData = async () => {
  try {
    const data = await AsyncStorage.getItem('@storage_Key');
    return {
      value: JSON.parse(data || ''),
      success: true,
    };
  } catch (e) {
    return {
      value: e,
      success: false,
    };
  }
};

export default _getData;
