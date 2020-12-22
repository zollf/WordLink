import React, { useState } from "react";
import { Text, View, TextInput, TextBase } from "react-native";
import Button from "../Button";
import InputField from "../InputField";
import styles from "./style";

const NewUserPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.font}>Welcome Back!</Text>
        <Text style={styles.font}>Create a Username</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.username}>Username</Text>
        <InputField color="blue" />
      </View>
      <View style={styles.button}>
        <Button text="Continue ->" color="orange" onPress={() => ({})} />
      </View>
    </View>
  );
};

export default NewUserPage;
