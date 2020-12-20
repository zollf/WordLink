import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Index } from "./src";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const _getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@storage_Key");
        setData(value !== null ? value : {});
      } catch (e) {
        console.log("testing");
      }
    };
    _getData();
  }, []);
  console.log(data);
  return <Index Data={data} />;
};

export default App;
