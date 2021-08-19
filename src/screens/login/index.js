import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Container from "../../components/common/container";
import Input from "../../components/common/input";
import CustomButton from "../../components/common/customButton";
import LoginComponent from "../../components/login";


const Login = () => {
  const [value, onChangeText] = useState("");

  return (
   <LoginComponent/>
  );

};
export default Login;
