import React from "react";
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import {SCREEN_LIST, STACK_LIST} from "../../constants/screen-mapping";


export const ProfileScreen = ({navigation}) => {
    const goToLogin = () => navigation.navigate(STACK_LIST.loginStack, {screen: SCREEN_LIST.loginScreen});
    return (<SafeAreaView>
        <Text>Profile screen</Text>
        <TouchableOpacity onPress={goToLogin}><Text>Login</Text></TouchableOpacity>
    </SafeAreaView>);
}