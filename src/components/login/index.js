import React from "react";
import Container from "../common/container";
import Input from "../common/input";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../common/customButton";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/RouteNames";

const LoginComponent = () => {


  const { navigate } = useNavigation();
  return (
    <Container>
      <Image height={"10%"} width={"20%"} source={require("../../assets/images/logo.png")} style={styles.logoImage} />

      <View>


        <Text style={styles.title}>Welcome to Textify</Text>
        <Text style={styles.subTitle}>Please Login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder={"Enter Username"}
            // error={'This field is required'}
          />
          <Input
            label="Password"
            icon={<Text> Show </Text>}
            iconPosition="right"
            secureTextEntry={true}
            placeholder={"Enter Password"}

          />
          <CustomButton primary title="Submit" />


          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => {
              navigate(REGISTER);
            }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </Container>
  );
};

export default LoginComponent;
