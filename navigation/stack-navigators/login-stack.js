import React from "react";

import { SCREEN_LIST } from "../../constants/screen-mapping";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LoginScreen} from "../../screens/single-sign-on/Login";
import {SignUp} from "../../screens/single-sign-on/Sign-up";
import {ForgotPassword} from "../../screens/single-sign-on/Forgot-password";

const Stack = createNativeStackNavigator();

export const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={SCREEN_LIST.loginScreen} component={LoginScreen} />
    <Stack.Screen name={SCREEN_LIST.registrationScreen} component={SignUp} />
    <Stack.Screen name={SCREEN_LIST.forgotPasswordScreen} component={ForgotPassword} />
  </Stack.Navigator>
);
