import React, { Component, useState, useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Animated,
  Button,
  Image,
} from 'react-native';

const AnimationScreen = ({ navigation, route }) => {

  const [isVis, setIsVis] = useState(true)
  const [isVis2, setIsVis2] = useState(false)
  const [isVis3, setIsVis3] = useState(false)
  const [isVis4, setIsVis4] = useState(false)



  const { all10Pokemon, userImage, playersPokemon, oppsPokemon, winCounter, setWinCounter } = route.params;
  const translation = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const translation3 = useRef(new Animated.Value(0)).current;
  const translation4 = useRef(new Animated.Value(0)).current;

  console.log(playersPokemon, oppsPokemon)

  useEffect(() => {
    Animated.timing(translation, { toValue: 275, duration: 3000, useNativeDriver: false }).start(() => { setIsVis2(true) })
    Animated.timing(translation2, { toValue: -275, duration: 3000, useNativeDriver: false }).start()
    Animated.timing(translation3, { toValue: -500, duration: 3000, delay: 4000, useNativeDriver: false }).start()
    Animated.timing(translation4, { toValue: 500, duration: 3000, delay: 3500, useNativeDriver: false }).start(() => { navigation.navigate('Fight',
    {
       all10Pokemon: all10Pokemon,
       userImage: userImage,
       playersPokemon: playersPokemon,
       oppsPokemon: oppsPokemon,
       setWinCounter: setWinCounter,
        winCounter: winCounter
     })})
    
}, [])


  

  return (
    <SafeAreaView>
      <Text style={{position: "absolute", top: 0, right: 0}}> WINS:{winCounter}</Text>
      <View style={{ display: isVis ? "flex" : "none" }}>
        <Animated.View style={{ display: isVis2 ? "none" : "flex", transform: [{ translateX: translation }] }}>
          <Image source={{ uri: "https://www.kindpng.com/picc/m/227-2271952_red-sprite-pokemon-png-transparent-png.png" }}
            style={{
              flex: 1,
              position: "absolute",
              left: 0,
              top: 20,
              width: 100,
              height: 100
            }} />
        </Animated.View>
        <View className="trainer-f">
          <Animated.View style={{ display: isVis2 ? "none" : "flex", transform: [{ translateX: translation2 }] }}>
            <Image source={{ uri: userImage }}
              style={{
                flex: 1,
                position: "absolute",
                right: 0,
                top: 175,
                width: 100,
                height: 100
              }} />
          </Animated.View>
          <Animated.View style={{ display: isVis2 ? "flex" : "none", transform: [{ translateX: translation3 }] }}>
            <Image source={{ uri: "https://www.kindpng.com/picc/m/227-2271952_red-sprite-pokemon-png-transparent-png.png" }}
              style={{
                flex: 1,
                position: "absolute",
                left: 275,
                top: 20,
                width: 100,
                height: 100
              }} />
          </Animated.View>
          <Animated.View style={{ display: isVis2 ? "flex" : "none", transform: [{ translateX: translation4 }] }}>
            <Image source={{ uri: userImage }}
              style={{
                flex: 1,
                position: "absolute",
                right: 275,
                top: 175,
                width: 100,
                height: 100
              }} />
            </Animated.View>
        </View>
        <View id="start-battle">
          <Text style={styles.fontSize}>Start battle </Text>
          <Animated.View style={{
            display: isVis2 ? "none" : "flex", flex: 1, flexDirection: "row", position: "absolute", top: 230, right: -75, transform: [{ translateX: translation2 }]
          }}>
            {playersPokemon.map((element) => {
              return (
                <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                  style={styles.smallImg} />
              )
            })}
          </Animated.View>
          <Animated.View style={{
            display: isVis2 ? "none" : "flex", flex: 1, flexDirection: "row", position: "absolute", top: 65, left: -75, transform: [{ translateX: translation }]
          }}>
            {oppsPokemon.map((element) => {
              return (
                <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                  style={styles.smallImg} />
              )
            })}
          </Animated.View>
          <Animated.View style={{
            display: isVis2 ? "flex" : "none", flex: 1, flexDirection: "row", position: "absolute", top: 230, right: 200, transform: [{ translateX: translation4 }]
          }}>
            {playersPokemon.map((element) => {
              return (
                <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                  style={styles.smallImg} />
              )
            })}
          </Animated.View>
          <Animated.View style={{
            display: isVis2 ? "flex" : "none", flex: 1, flexDirection: "row", position: "absolute", top: 65, left: 200, transform: [{ translateX: translation3 }]
          }}>
            {oppsPokemon.map((element) => {
              return (
                <Image source={{ uri: "https://cdn.imgbin.com/1/5/20/imgbin-pok-ball-pok-mon-go-pokemon-go-7qgQVQfUmtCQEvBdeVffdxuhp.jpg" }}
                  style={styles.smallImg} />
              )
            })}
          </Animated.View>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  oppsPoke: {
    flex: 1,
    position: "absolute",
    left: 40,
    top: 50,
    width: 100,
    height: 100,
    fontSize: 60,
  },
  playersPoke: {
    flex: 1,
    position: "absolute",
    right: 40,
    top: 205,
    width: 100,
    height: 100,
    fontSize: 60,
  },
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

export default AnimationScreen;
