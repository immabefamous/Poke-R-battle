import React, { useState, useEffect, useRef } from 'react';
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
import { multiply } from 'react-native-reanimated';

const FightScreen = ({ navigation, route}) => {
    const {all10Pokemon, userImage, playersPokemon, oppsPokemon, winCounter, setWinCounter} = route.params;
    const translation = useRef(new Animated.Value(0)).current;
    const translation2 = useRef(new Animated.Value(0)).current;
  
    console.log(playersPokemon, oppsPokemon)
  
    const [pokeHp, setPokeHp] = useState(null)
    const [pokeAtk, setPokeAtk] = useState(null)
    const [pokeDef, setPokeDef] = useState(null)
    const [pokeSpd, setPokeSpd] = useState(null)
    const [pokeHp2, setPokeHp2] = useState(null)
    const [pokeAtk2, setPokeAtk2] = useState(null)
    const [pokeDef2, setPokeDef2] = useState(null)
    const [pokeSpd2, setPokeSpd2] = useState(null)

    const generateBattleData = () => {
        let hp = playersPokemon[0].stats[0].base_stat
        let attack = playersPokemon[0].stats[1].base_stat
        let defense = playersPokemon[0].stats[2].base_stat
        let speed = playersPokemon[0].stats[5].base_stat
        setPokeHp(hp)
        setPokeAtk(attack)
        setPokeDef(defense)
        setPokeSpd(speed)
        let hp2 = oppsPokemon[0].stats[0].base_stat
        let attack2 = oppsPokemon[0].stats[1].base_stat
        let defense2 = oppsPokemon[0].stats[2].base_stat
        let speed2 = oppsPokemon[0].stats[5].base_stat
        setPokeHp2(hp2)
        setPokeAtk2(attack2)
        setPokeDef2(defense2)
        setPokeSpd2(speed2)
    }
    useEffect(()=> {generateBattleData()
        
    }, [])

    const runBattle = () => {
      let multiplier = (1 + Math.floor(Math.random()))
      
      // user's pokemon goes first
      if (pokeSpd >= pokeSpd2) 
      {
        // user's pokemon atk less than opp's pokemon def
        if ((pokeAtk * multiplier) < pokeDef2)
        // opp's health goes down one
        {Animated.spring(translation, { toValue: 10, duration: 500, useNativeDriver: false }).start()
        Animated.spring(translation, { toValue: -10, duration: 500, delay: 500, useNativeDriver: false }).start()
          setPokeHp2(pokeHp2 - 1)
          // if opp's poke hp is 0, game over
        if (pokeHp2 <= 0)
        {alert("you win Would you like to play again")
        setWinCounter(winCounter + 1)
        navigation.navigate('Battle')}
        // opp turn , if opps Pokemon attack is less than user's pokemon def
        if ((pokeAtk2 * multiplier) < pokeDef)
        // user's health goes down one
        {Animated.spring(translation2, { toValue: -10, duration: 500, delay: 500, useNativeDriver: false }).start()
          setPokeHp(pokeHp - 1)
          // if user's hp is 0 game over
          if (pokeHp <= 0)
          {alert("you lose Would you like to play again")
          setWinCounter(null)
        navigation.navigate('Battle')
        }}
        
        else {
          Animated.spring(translation2, { toValue: -10, duration: 500, useNativeDriver: false }).start()
          Animated.spring(translation2, { toValue: 10, duration: 500, delay: 500, useNativeDriver: false }).start()
          // opp's poke attacks user's Poke like normal
          setPokeHp(pokeHp - ((pokeAtk2 * multiplier) - pokeDef))
          // if user's poke hp is 0 then game over
          if (pokeHp <= 0)
        {alert("you lose Would you like to play again")
        setWinCounter(null)
        navigation.navigate('Battle')
      }
        }
      }
      
      else {
        Animated.spring(translation, { toValue: 10, duration: 500, useNativeDriver: false }).start()
        Animated.spring(translation, { toValue: -10, duration: 500, delay: 500, useNativeDriver: false }).start()
          // user's poke attacks like normal
          setPokeHp2(pokeHp2 - ((pokeAtk * multiplier) - pokeDef2))
          if (pokeHp2 <= 0)
        {
          alert("you win Would you like to play again")
          setWinCounter(winCounter + 1)
        navigation.navigate('Battle')
        }
        // opp turn , if opps Pokemon attack is less than user's pokemon def
        if ((pokeAtk2 * multiplier) < pokeDef)
        // user's health goes down one
        {Animated.spring(translation2, { toValue: -10, duration: 500, useNativeDriver: false }).start()
        Animated.spring(translation2, { toValue: 10, duration: 500, delay: 500, useNativeDriver: false }).start()
          setPokeHp(pokeHp - 1)
          // if user's hp is 0 game over
          if (pokeHp <= 0)
          {alert("you lose Would you like to play again")
          setWinCounter(null)
        navigation.navigate('Battle')
        }}
        
        else {
          Animated.spring(translation2, { toValue: -10, duration: 500, useNativeDriver: false }).start()
          Animated.spring(translation2, { toValue: 10, duration: 500, delay: 500, useNativeDriver: false }).start()
          // opp's poke attacks user's Poke like normal
          setPokeHp(pokeHp - ((pokeAtk2 * multiplier) - pokeDef))
          // if user's poke hp is 0 then game over
          if (pokeHp <= 0)
        {alert("you lose Would you like to play again")
        setWinCounter(null)
        navigation.navigate('Battle')
      }
        }
        }
      }
      else 
      {
        // opp attacks first
        // opp's poke attk is less than user's poke def
        if ((pokeAtk2 * multiplier) < pokeDef)
        // user's poke hp goes down by 1
        {Animated.spring(translation2, { toValue: -10, duration: 500, useNativeDriver: false }).start()
        Animated.spring(translation2, { toValue: 10, duration: 500, delay: 500, useNativeDriver: false }).start()
          setPokeHp(pokeHp - 1)
        // if user's poke hp is 0, game over
          if (pokeHp <= 0)
          {alert("you lose Would you like to play again")
          setWinCounter(null)
        navigation.navigate('Battle')}
        // user's pokemon atk less than opp's pokemon def
        if ((pokeAtk * multiplier) < pokeDef2)
        // opp's health goes down one
        {Animated.spring(translation, { toValue: 10, duration: 500, useNativeDriver: false }).start()
        Animated.spring(translation, { toValue: -10, duration: 500,  delay: 500, useNativeDriver: false }).start()
          setPokeHp2(pokeHp2 - 1)
         // if opp's poke hp is 0, game over
        if (pokeHp2 <= 0)
        {alert("you win Would you like to play again")
        setWinCounter(winCounter + 1)
        navigation.navigate('Battle')
        }} else {
          Animated.spring(translation, { toValue: 10, duration: 500, useNativeDriver: false }).start()
          Animated.spring(translation, { toValue: -10, duration: 500, delay: 500, useNativeDriver: false }).start()
          //user's poke atks like normal
          setPokeHp2(pokeHp2 - ((pokeAtk * multiplier) - pokeDef2))
          // if opp's poke hp is 0, game over
          if (pokeHp2 <= 0)
        {
          alert("you win Would you like to play again")
          setWinCounter(winCounter + 1)
        navigation.navigate('Battle')
        }
        }}
      
        else {
          Animated.spring(translation2, { toValue: -10, duration: 500, useNativeDriver: false }).start()
          Animated.spring(translation2, { toValue: 10, duration: 500, delay: 500, useNativeDriver: false }).start()
          //opp's poke atk like normal
        setPokeHp(pokeHp - ((pokeAtk2 * multiplier) - pokeDef))
        //if user hp goes to zero, game over
          if (pokeHp <= 0)
        {alert("you lose Would you like to play again")
        setWinCounter(null)
        navigation.navigate('Battle')
      }
      if ((pokeAtk * multiplier) < pokeDef2)
      // opp's health goes down one
      {Animated.spring(translation, { toValue: 10, duration: 500, useNativeDriver: false }).start()
      Animated.spring(translation, { toValue: -10, duration: 500, delay: 500, useNativeDriver: false }).start()
        setPokeHp2(pokeHp2 - 1)
       // if opp's poke hp is 0, game over
      if (pokeHp2 <= 0)
      {alert("you win Would you like to play again")
      setWinCounter(winCounter + 1)
      navigation.navigate('Battle')
      }} else {
        Animated.spring(translation, { toValue: 10, duration: 500, useNativeDriver: false }).start()
        Animated.spring(translation, { toValue: -10, duration: 500, delay: 500, useNativeDriver: false }).start()
        //user's poke atks like normal
        setPokeHp2(pokeHp2 - ((pokeAtk * multiplier) - pokeDef2))
        // if opp's poke hp is 0, game over
        if (pokeHp2 <= 0)
      {
        alert("you win Would you like to play again")
        setWinCounter(winCounter + 1)
      navigation.navigate('Battle')
      }
      }
        }
      }
    }

    


    return (
<SafeAreaView>
<Text style={{position: "absolute", top: 0, right: 0}}> WINS:{winCounter}</Text>
<View>
        <Animated.View style={{transform: [{ translateX: translation2 }]}}>
          <Image source={{ uri: oppsPokemon[0].sprites.front_default }}
            style={{
              flex: 1,
              position: "absolute",
              right: 0,
              top: 20,
              width: 75,
              height: 75
            }} />
        </Animated.View>
        <View className="trainer-f">
          <Animated.View style={{transform: [{ translateX: translation }]}}>
            <Image source={{ uri: playersPokemon[0].sprites.back_default }}
              style={{
                flex: 1,
                position: "absolute",
                left: 0,
                top: 175,
                width: 75,
                height: 75
              }} />
          </Animated.View>
        </View>
        <View id="start-battle">
          <View>
            <Text style={styles.playersPoke}> {pokeHp}%</Text>
          </View>
          <View></View>
          <Text style={styles.oppsPoke}> {pokeHp2}%</Text>
        </View>
        <View>
        </View>
        <View style={{
          flex: 1,
          position: "absolute",
          left: 40,
          top: 350,
          width: 100,
          height: 50,
        }}>
          <TouchableWithoutFeedback onPress={() => runBattle()}>
            <Text style={{ fontSize: 50 }}> {playersPokemon[0].moves[0].move.name} </Text>
          </TouchableWithoutFeedback>
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
    width: 50,
    height: 50,
    fontSize: 60,
  },
  playersPoke: {
    flex: 1,
    position: "absolute",
    right: 40,
    top: 205,
    width: 50,
    height: 50,
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
    width: 50,
    height: 50,
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
    width: 60,
    height: 60,
    paddingRight: 10,
  },
  smallImg: {
    width: 25,
    height: 25,
  },
});

export default FightScreen;
