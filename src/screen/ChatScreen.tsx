import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './login/SplashScreen';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './login/RegisterScreen';
import RealChat from './RealChat';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="로그인"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: '', 
          headerStyle: {
            backgroundColor: '#A5DF00', 
          },
          headerTintColor: '#283328', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
};

function ChatScreen() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RealChat"
        component={RealChat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatScreen;