import AsyncStorage from "@react-native-async-storage/async-storage";

const _getData = async () => {
  try {
    return { 
      value: await AsyncStorage.getItem("@storage_Key"), 
      success: true 
    };
  } catch (e) {
    return { 
      value: e,
      success: false 
    }
  }
};

export default _getData;