import React, { useState, useEffect, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    Button,
    Image,
} from 'react-native';



const BattleScreen = ({ navigation, }) => {



    const [userImage, setUserImage] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png")
    const [winCounter, setWinCounter] = useState(null);
    const [all10Pokemon, setPokemon] = useState([])


    const [isVis, setIsVis] = useState(false)
    const [isVis2, setIsVis2] = useState(false)
    const [isVis3, setIsVis3] = useState(true)
    const [isVis4, setIsVis4] = useState(false)


    // turning image for pokemon in and off
    const [isVis51, setIsVis51] = useState(false)
    const [isVis52, setIsVis52] = useState(false)
    const [isVis53, setIsVis53] = useState(false)

    // creating a way to get a random pokemon from the list
    let randomPokemon = () => {
        let randomNumber = [Math.floor(Math.random() * 10)]
        let anyPokemon = all10Pokemon[randomNumber]
        return (
            anyPokemon
            // anyTrainer.trainerImg
        )
    }
    const getAllPokemon = async () => {
        let x = 0
        while (x < 10) {
            let randomNumber = [Math.ceil(Math.random() * 150)];
            const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            const res = await req.json()
            // console.log(res)
            setPokemon((prev) => [...prev, res])

            x += 1
        }

    }

    const trainerSelected = async () => {
        setIsVis(false)
        setIsVis2(true)

    }

    const pokemonSelected = () => {
        let x = 0
        if (playersPokemon.length = 1) {
            setIsVis2(false)
            setIsVis3(true)
            // setTimeout(loadBattle, 12000)
            while (x < 3) {
                oppsPokemon.push(randomPokemon())
                x += 1
                // moveList.shift()
            }
        } else {
            Alert.alert("select 3 pokemon")
        }
    }


    useEffect(() => {
        // getTrainers();
        getAllPokemon();

        //   getAllMoves();
    }, [])

    let trainersList = ["https://thumbs.gfycat.com/EsteemedOffbeatChameleon-max-1mb.gif",
        "https://pa1.narvii.com/6814/e15153854a754822bdecbd329d67c4462f81388d_hq.gif",
        "http://pa1.narvii.com/5722/c5e67f639766cfa1e9a5472192a2addb84f8c458_00.gif",
        "https://ssb.wiki.gallery/images/9/9e/Unova.gif",
        "https://d14eu5yur8w3te.cloudfront.net/api/v1/media/baseclub-media-uploads-production/3719a8f6-4eb6-41be-b43c-3d41492b1355.gif",
        "https://gifs4crds.carrd.co/assets/images/gallery06/9b4769f2.gif?vca07fc73a"
    ]


    const AnimationScreen = ({ navigation }) => {

    }

    const FightScreen = ({ navigation }) => {

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 16 }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ position: "absolute", top: 0, right: 0 }}> WINS:{winCounter}</Text>
                        <View>
                            <Text style={styles.fontSize}>CLICK ON HIM OR HER</Text>
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
                            <Button onPress={() => navigation.navigate('PokeSelect',
                                {
                                    all10Pokemon: all10Pokemon,
                                    userImage: userImage,
                                    setWinCounter: setWinCounter,
                                    winCounter: winCounter
                                })}

                                style={styles.buttonSize}
                                title="PICK YOUR POKEMON"
                            />
                        </View>

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
        height: 50,
        width: 50,
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
        width: 50,
        height: 50,
        paddingRight: 10,
    },
    smallImg: {
        width: 25,
        height: 25,
    },
});
export default BattleScreen;