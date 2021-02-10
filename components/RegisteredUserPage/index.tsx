import React from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import InputField from "../InputField";
import styles from "./styles";
import Logo from "../Logo";
import { heightPercentageToDP } from "react-native-responsive-screen";

const NewUserPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
        <Text style={[styles.text, { fontSize: heightPercentageToDP("4%") }]}>
          CHALLENGE YOUR WORD LINKING SKILLS
        </Text>
      </View>
      <View style={{ marginBottom: heightPercentageToDP("10%") }}>
        <Text style={styles.text}>Welcome Back!</Text>
        <InputField color="blue" staticValue={"Username"} />
      </View>
      <Button text="START" color="orange" onPress={() => ({})} />
    </View>
  );
};

export default NewUserPage;
