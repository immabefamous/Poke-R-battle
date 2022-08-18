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
            
            {/* <Stack.Screen
              name="Fight"
              component={FightScreen}
              options={{ title: 'Setting Page' }}
            /> */}
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
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="BattleStack"
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
          {/* <View style={{display: isVis ? "inherit" : "none"}}> 
          <Text style={styles.fontSize}>CHOOSE YOUR TRAINER</Text>
          <Text style={styles.fontSize}>BY CLICKING HIM OR HER</Text>
          <FlatList
            data={trainersList}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 20 }}>
                <TouchableOpacity
                  style={styles.buttonSize}
                  onPress={() => setUserImage(item)}>
                  <Image style={styles.imageThumbnail} source={{ uri: item }} />
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />

          <View style={styles.side}>
            <Text style={styles.fontSize}>TRAINER SELECTED</Text>
            <Image style={styles.imgSize} source={{ uri: userImage }} />
          </View>
          <Button onPress={trainerSelected}
            style={styles.buttonSize}
            title="NEXT" />
        </View> */}
        {/* <View style={{ display: isVis2 ? "inherit" : "none" }}>
          <Text style={styles.fontSize}>CHOOSE YOUR POKEMON</Text>
          <Text style={styles.fontSize}>BY CLICKING UNTIL YOU HAVE 3</Text>
          <FlatList
            data={all20Pokemon}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                <TouchableOpacity
                  onPress={() => { if (playersPokemon.length <= 2) { return (setPlayersPokemon(last => [...last, item]), setIsVis5(true)) } }}>
                  <Image style={styles.imgSize2} source={{ uri: item.sprites.front_default }} />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
          <View style={{ flexDirection: "row", display: isVis5 ? "flex" : "none" }}>
            {playersPokemon.map((element, index) => {
              return (
                <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png` }}
                  style={{ width: 100, height: 100 }} />
              )
            })}
            <Button style={{ display: isVis5 ? "flex" : "none" }}
              title="RESET All"
              onPress={() => { playersPokemon.splice(0, playersPokemon.length), setIsVis5(false) }} />
          </View>
          <Button onPress={pokemonSelected}
            title="NEXT" />
        </View>
        <View style={{ display: isVis3 ? "inherit" : "none" }}>
          <Animated.View style={{ transform: [{ translateX: translation }] }}>
            <Image source={{ uri: "https://www.kindpng.com/picc/m/227-2271952_red-sprite-pokemon-png-transparent-png.png" }}
              style={{
                flex: 1,
                position: "absolute",
                left: 0,
                top: -200,
                width: 150,
                height: 150
              }} />
          </Animated.View>
          <View className="trainer-f">
            <Image source={{ uri: userImage }} style={{ height: 120, width: 120 }} />
          </View>
          <View id="start-battle">
            <Text style={styles.fontSize}>Start battle </Text>
            <View style={{
              flex: 1, flexDirection: "row", position: "absolute", top: -100, right: 0
            }}>
              <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                style={styles.smallImg} />
              <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                style={styles.smallImg} />
              <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                style={styles.smallImg} />
            </View>
            <View id="oppPokeballs">
              <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                style={styles.smallImg} />
              <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                style={styles.smallImg} />
              <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                style={styles.smallImg} />
            </View>
          </View>
        </View>
        {console.log(playersPokemon)}
        {console.log(trainersPokemon)} */}
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
