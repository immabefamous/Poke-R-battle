// import React in our code
import React, { useState, useEffect, useRef } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, TouchableOpacity, FlatList, Image, Button, Text, Animated } from 'react-native';
// import screen navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import BattleScreen from './pages/BattleScreen';
import PokeSelectScreen from './pages/PokeSelectScreen';
import AnimationScreen from './pages/AnimationScreen';
import FightScreen from './pages/FightScreen';

const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator()

  function HomeStack() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen
          name="Battle"
          component={BattleScreen}
          options={{ title: 'Trainer Selection' }}
        />
      </Stack.Navigator>
    );
  }

  function BattleStack() {
    return (
      <Stack.Navigator
        initialRouteName="Battle"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Battle"
          component={BattleScreen}
          options={{ title: 'Trainer Selection' }}
        />
        <Stack.Screen
          name="PokeSelect"
          component={PokeSelectScreen}
          options={{ title: 'Pokemon Selection' }}
        />
        <Stack.Screen
          name="Animation"
          component={AnimationScreen}
          options={{ title: 'Loading Page' }}
        />

        <Stack.Screen
          name="Fight"
          component={FightScreen}
          options={{ title: 'Setting Page' }}
        />
      </Stack.Navigator>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#42f44b',
          }}>
          <Tab.Screen
            name="Welcome to Pokemon R Battle"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Pokemon R Battle"
            component={BattleStack}
            options={{
              tabBarLabel: 'Battle',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="pokeball"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
         
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'skyblue',
  },
  button: {
    // alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "auto",
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    width: 75,
  },
  imgSize: {
    width: 100,
    height: 100,
    // borderBottomColor: "lightblue",
  },
  buttonSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontSize: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center"
  },
  side: {
    flexDirection: 'row',

  },
  imgSize2: {
    width: 80,
    height: 80,
    paddingRight: 10,
  },
  smallImg: {
    width: 25,
    height: 25,
  },

});
