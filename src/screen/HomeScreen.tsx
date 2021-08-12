import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import { useFonts } from 'expo-font';

function HomeScreen() {

  // expo-font모듈로 custom font 적용 부분
  const [loaded] = useFonts({
    DancingScript: require('../../assets/fonts/DancingScript-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  //

  //본문
  return (
    <View style={styles.container}>
      <Text style={styles.font}><Text style={{fontFamily:'DancingScript'}}>PeterPet</Text> is coming soon!</Text>
      <Text>Please wait for a while</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 22,
    marginBottom: 10,
    // fontFamily: 'DancingScript',
    // fontWeight: 'bold',
  },
});

export default HomeScreen;