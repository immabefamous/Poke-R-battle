
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Welcome to Poke R Battle
            This is a small React-Native-App to show the off my capabilities in terms of design and funtionality.
            Here you will select a pokemon trainer and select a pokemon and battle Trainer Red with a random pokemon from the selection you chose from.
            You only have one move. Let's see if you can win 5 times in a row
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Battle')
            }>
            <Text>Play PokeMon R Battle</Text>
          </TouchableOpacity>
          
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Emmanuel Boateng
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          Full-Stack Developer
        </Text>
      </View>
      </ScrollView>
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
});
export default HomeScreen;
