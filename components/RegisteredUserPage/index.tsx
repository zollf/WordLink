import React from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import InputField from "../InputField";
import styles from "./styles";

const NewUserPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.font}>Welcome Back!</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.username}>Username</Text>
        <InputField color="blue" input={false} value={"testBitch"} />
      </View>
      <View style={styles.button}>
        <Button text="START" color="orange" onPress={() => ({})} />
      </View>
    </View>
  );
};

export default NewUserPage;
