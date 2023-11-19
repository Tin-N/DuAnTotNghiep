import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivateUserScreen from './ActivateUserScreen';
import DisableUserScreen from './DisableUserScreen';



const Tab = createMaterialTopTabNavigator();

export default function Test() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{ backgroundColor: 'white',tabBarPressOpacity: 111, }}
        screenOptions={{
            tabBarPressColor:'transparent',
            tabBarInactiveTintColor: "#a6a6a6",
            tabBarIndicatorStyle: {
                height: null,

                borderRadius: 10,
                backgroundColor: "white",
            },
            tabBarStyle: {
                alignSelf: "center",
                width: '100%',
                borderRadius: 10,
                backgroundColor:  "white",
                elevation: 5, // shadow on Android
            }
            }}
      >
        <Tab.Screen
          name="Home"
          component={DisableUserScreen}
          options={{ title: 'Vô hiệu hóa người dùng' }}
        />
        <Tab.Screen
          name="Settings"
          component={ActivateUserScreen}
          options={{ title: 'Kích hoạt người dùng' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
