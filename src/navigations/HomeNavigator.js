import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/RouteNames";
import Contacts from "../screens/contacts";
import ContactDetail from "../screens/contactDetails";
import CreateContact from "../screens/createContact";
import Settings from "../screens/settings";


const HomeNavigator = () => {

  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouuteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
