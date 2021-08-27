import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from "react-native";

function RealChat() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Let's Chat!</Text>
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
  },
});

export default RealChat;