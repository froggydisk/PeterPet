import React from 'react';
import {StyleSheet, Text, View} from "react-native";

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Settings</Text>
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

export default SettingsScreen;