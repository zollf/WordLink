import React, { useState } from "react";
import { Text, View, TextInput, TextBase } from "react-native";
import Button from "../Button";
import InputField from "../InputField";
import styles from "./style";

const NewUserPage = () => {
  return (
    <View style={{ ...styles.container }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24 }}>Welcome Back!</Text>
        <Text style={{ fontSize: 24 }}>Create a Username</Text>
      </View>
      <View style={styles.input}>
        <Text style={{ width: 229, fontSize: 12 }}>Username</Text>
        <InputField color="blue" />
      </View>
      <View style={styles.button}>
        <Button text="Continue ->" color="orange" onPress={() => ({})} />
      </View>
    </View>
  );
};

export default NewUserPage;
