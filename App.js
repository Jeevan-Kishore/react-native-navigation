import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useLinking } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {SCREEN_LIST, STACK_LIST} from "./constants/screen-mapping";
import {ModalStack} from "./navigation/stack-navigators/modal-stack";
import {LoginStack} from "./navigation/stack-navigators/login-stack";
import {enableScreens} from "react-native-screens";

const Stack = createStackNavigator();

enableScreens();


export default function App(props) {
  const ref = useRef(null);
  const { getInitialState } = useLinking(ref, {
    prefixes: ["xyx://"],
    config: {
      [SCREEN_LIST.storyScreen]: "story/:slug"
    }
  });

  const [initialState, setInitialState] = useState();

  useEffect(() => {
    Promise.race([
      getInitialState(),
      new Promise(resolve =>
          // Timeout in 150ms if `getInitialState` doesn't resolve
          // Workaround for https://github.com/facebook/react-native/issues/25675
          setTimeout(resolve, 150)
      )
    ])
        .catch(e => {
          console.error(e);
        })
        .then(state => {
          if (state !== undefined) {
            setInitialState(state);
          }

        });
  }, [getInitialState]);

  return (
      <View style={styles.container}>
        <NavigationContainer initialState={initialState} ref={ref}>
          <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={STACK_LIST.modalStack}
          >
            <Stack.Screen name={STACK_LIST.modalStack} component={ModalStack} />
            <Stack.Screen name={STACK_LIST.loginStack} component={LoginStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
