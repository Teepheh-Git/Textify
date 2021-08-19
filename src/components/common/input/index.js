import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles";
import colors from "../../../assets/theme/colors";

const Input = ({ onChangeText, iconPosition, icon, style, value, label, error, ...props }) => {

  const [focused, setFocus] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };

  const getBorderColor = () => {

    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.gray;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && < Text> {label} </Text>}
      <View style={[
        styles.wrapper, { alignItems: icon ? "center" : "baseline" }, {
          borderColor: getBorderColor(),
          flexDirection: getFlexDirection(),
        }]}>
        <View>
          <Text>
            {icon && icon}
          </Text>
        </View>

        <TextInput style={[styles.textInput, style]}
                   onChangeText={onChangeText}
                   value={value}
                   onFocus={() => {
                     setFocus(true);
                   }}
                   onBlur={() => {
                     setFocus(false);
                   }}
                   {...props}

        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
