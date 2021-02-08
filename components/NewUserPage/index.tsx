import React from "react";
import { Text, View, Image } from "react-native";
import Button from "../Button";
import InputField from "../InputField";
import Logo from "../Logo";
import styles from "./styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const NewUserPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Text
          style={[
            styles.text,
            {
              fontSize: heightPercentageToDP("4%"),
              width: widthPercentageToDP("60%"),
              textAlign: "center",
              marginLeft: widthPercentageToDP("7.5%"),
              marginTop: heightPercentageToDP("5%"),
            },
          ]}
        >
          TO GET LINKING ENTER A USERNAME
        </Text>
      </View>
      <Image
        source={require("../../images/left-arrow.png")}
        style={styles.image}
      />
      <View style={{ marginBottom: heightPercentageToDP("12.5%") }}>
        <Text>Username</Text>
        <InputField color="blue" staticValue="" />
      </View>
      <View>
        <Button text="Continue" color="orange" onPress={() => ({})} />
      </View>
    </View>
  );
};

export default NewUserPage;
