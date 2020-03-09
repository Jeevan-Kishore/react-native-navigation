import React from "react";

import {Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../screens/home";
import {SearchScreen} from "../../screens/search";
import {ProfileScreen} from "../../screens/profile";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  activeTintColor: "green",
  style: {
    paddingTop: 5
  }
};

const TabIcons = (focused, icon) => {
  const iconColor = focused ? "red" : "black";
  return  <Text style={{color: iconColor}}>{icon}</Text>;
};

export const BottomTabStack = () => (
  <Tab.Navigator tabBarOptions={tabBarStyle}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => TabIcons(focused, "home"),
        title: "Home",
        tabBarTestID: "detox-home-tab"
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => TabIcons(focused, "search"),
        title: "Search",
        tabBarTestID: "detox-search-tab"
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => TabIcons(focused, "my-app"),
        title: "My App",
        tabBarTestID: "detox-app-tab"
      }}
    />
  </Tab.Navigator>
);
