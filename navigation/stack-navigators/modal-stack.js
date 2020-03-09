import React from "react";
import { BottomTabStack } from "../bottom-tab-navigators/bottom-tab-stack";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SCREEN_LIST, STACK_LIST} from "../../constants/screen-mapping";
import {AuthorScreen} from "../../screens/author";
import {StoryScreen} from "../../screens/story";


const Stack = createNativeStackNavigator();

export const ModalStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName={STACK_LIST.bottomTabStack}
  >
    <Stack.Screen name={SCREEN_LIST.authorScreen} component={AuthorScreen} />
    <Stack.Screen name={SCREEN_LIST.storyScreen} component={StoryScreen} />
    <Stack.Screen name={STACK_LIST.bottomTabStack} component={BottomTabStack} />
  </Stack.Navigator>
);
