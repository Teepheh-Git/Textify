import React from "react";
import Container from "../common/container";
import Input from "../common/input";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../common/customButton";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/RouteNames";

const RegisterComponent = ({ onSubmit, onChange, form, error, loading, errors }) => {


  const { navigate } = useNavigation();
  return (
    <Container>
      <Image height={"10%"} width={"20%"} source={require("../../assets/images/logo.png")} style={styles.logoImage} />

      <View>


        <Text style={styles.title}>Welcome to Textify</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>

          {error.error && <Text>{error.error}</Text>}



          {/*stopped here @ episode 14,,, min: 16.42*/}


          <Input
            label="Username"
            iconPosition="right"
            placeholder={"Enter Username"}
            onChangeText={(value) => {
              onChange({ name: "userName", value: value });
            }}
            error={errors.userName}

            // error={'This field is required'}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder={"Enter First Name"}
            onChangeText={(value) => {
              onChange({ name: "firstName", value: value });
            }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder={"Enter Last Name"}
            error={errors.lastName}
            onChangeText={(value) => {
              onChange({ name: "lastName", value: value });
            }}
            // error={'This field is required'}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder={"Enter Email"}
            error={errors.Email}
            onChangeText={(value) => {
              onChange({ name: "Email", value: value });
            }}

            // error={'This field is required'}
          />
          <Input
            label="Password"
            icon={<Text> Show </Text>}
            iconPosition="right"
            secureTextEntry={true}
            placeholder={"Enter Password"}
            error={errors.password}
            onChangeText={(value) => {
              onChange({ name: "password", value: value });
            }}


          />


          <CustomButton disabled={loading} loading={loading} onPress={onSubmit} primary title="Submit" />


          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => {
              navigate(LOGIN);
            }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </Container>
  );
};

export default RegisterComponent;
