import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
  Image,
} from 'react-native';

const PokeSelectScreen = ({navigation, route }) => {
    const [isVis5, setIsVis5] = useState(false)
    const [playersPokemon, setPlayersPokemon] = useState([])
    const [oppsPokemon, setOppsPokemon] = useState([])

    const {all10Pokemon, userImage, setWinCounter, winCounter } = route.params;

    // const randomOppPokemon = () => {
    //     let randomNumber = Math.ceil(Math.random() * 10);
    //     let y = 0
    //     console.log(all10Pokemon[randomNumber])
    //     if (playersPokemon.length > y) {
    //         let pokeRan = all10Pokemon[randomNumber]
    //         setOppsPokemon(pokeRan)
    //         console.log(oppsPokemon)
    //         y = y + 1
    //         console.log(y)
    //     } 
    // }

    return (
    <SafeAreaView>
      <ScrollView>
      <Text style={{position: "absolute", top: 0, right: 0}}> WINS:{winCounter}</Text>
     <View >
      <Text style={styles.fontSize}>CHOOSE YOUR POKEMON</Text>
      <Text style={styles.fontSize}>BY CLICKING UNTIL YOU HAVE 3</Text>
      <FlatList
        data={all10Pokemon}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
            <TouchableOpacity
              onPress={() => { if (playersPokemon.length <= 0) { return (setPlayersPokemon(last => [...last, item]), setOppsPokemon( [all10Pokemon[[Math.floor(Math.random() * 10)]]]), setIsVis5(true)) } }}>
              <Image style={styles.imgSize2} source={{ uri: item.sprites.front_default }} />
            </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
      <View style={{ flexDirection: "row", display: isVis5 ? "flex" : "none" }}>
        {playersPokemon.map((element) => {
          return (
            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png` }}
              style={{ width: 100, height: 100 }} />
          )
        })}
   
        {console.log(oppsPokemon)}
        <Button style={{ display: isVis5 ? "flex" : "none" }}
          title="RESET All"
          onPress={() => { playersPokemon.splice(0, playersPokemon.length), setIsVis5(false) }} />
      </View>
      <Button onPress={() => {  
                          navigation.navigate('Animation',
                          {
                             all10Pokemon: all10Pokemon,
                             userImage: userImage,
                             playersPokemon: playersPokemon,
                             oppsPokemon: oppsPokemon,
                             setWinCounter: setWinCounter,
                             winCounter: winCounter
                           })
                          
      
    }}
        title="Begin the battle" />
    </View>
    </ScrollView>
    </SafeAreaView>
    )
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

export default PokeSelectScreen;