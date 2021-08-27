import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

function SettingsScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Settings</Text>
      <Button
        title="Logout"
        onPress={() => {
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              },
              {
                text: 'Confirm',
                onPress: () => {
                  AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
                  // props.navigation.navigate('Auth');
                  props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'SplashScreen' }]
                  })
                  Alert.alert('로그아웃 되었습니다.')
                },
              },
            ],
            {cancelable: false},
          );
        }}
      />
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