
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            Here you will select a pokemon trainer and three pokemon and battle another random person.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('SettingsStack', { screen: 'Settings' })
            }>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}>
            <Text>Open Details Screen</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Emmanuel Boateng
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          Full-Stack Developer
        </Text>
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
});
export default HomeScreen;
