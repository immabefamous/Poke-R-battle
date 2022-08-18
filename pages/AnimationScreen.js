import React, { useState, useEffect, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    Animated,
    Button,
    Image,
} from 'react-native';

const AnimationScreen = ({ navagation, route}) => {
    const {all10Pokemon, userImage, playersPokemon, oppsPokemon} = route.params;
    const translation = useRef(new Animated.Value(0)).current;

    useEffect(()=> {
        Animated.timing(translation, { toValue: 150, }).start();
    }, [])
    return (
<SafeAreaView>

          <Animated.View style={{ transform: [{ translateX: translation }] }}>
            <Image source={{ uri: "https://www.kindpng.com/picc/m/227-2271952_red-sprite-pokemon-png-transparent-png.png" }}
              style={{
                flex: 1,
                position: "absolute",
                left: 0,
                top: 0,
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
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
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
