import React from "react";
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import {SCREEN_LIST, STACK_LIST} from "../../constants/screen-mapping";

export const LoginScreen = ({navigation}) => {
    const goToReg = () => navigation.navigate(SCREEN_LIST.registrationScreen);
    return <SafeAreaView>
        <Text>Login screen</Text>
        <TouchableOpacity onPress={goToReg}><Text>Reg</Text></TouchableOpacity>
    </SafeAreaView>;
}