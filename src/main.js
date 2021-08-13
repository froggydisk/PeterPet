import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from "./screen/HomeScreen"
import SettingsScreen from "./screen/SettingsScreen"
import ChatScreen from "./screen/ChatScreen"
import CommunityScreen from "./screen/CommunityScreen"
import ProfileScreen from "./screen/ProfileScreen"

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          // focused: bool, 클릭했는지 여부
  
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              return (
                <Feather size={size} name={iconName} color={color} />
              );
              break;
            case 'Chat':
              iconName = 'forum-outline';
              break;
            case 'Community':
              iconName = 'view-dashboard-outline';
              break;
            case 'Profile':
              iconName = 'profile';
              return (
                <AntDesign size={size} name={iconName} color={color} />
              );
            default:
              iconName = 'settings-outline';
              return (
                <Ionicons size={size} name={iconName} color={color} />
              );
          }
          return (
            <MaterialCommunityIcons size={size} name={iconName} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#38610B', // 활성화 되었을 때 색
        inactiveTintColor: '#C7CDD3', // 비활성화 색
        // showLabel: false, // 텍스트 숨기기
  }}>
    <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} options={{
    headerTitleStyle: {
      fontSize: 18,
      textAlign: 'center',
    },},{ headerShown: false }} />
    <Tab.Screen options={{ headerShown: false }} name="Community" component={CommunityScreen} />
    <Tab.Screen options={{ headerShown: false }} name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator ();

function LogoTitle() {
  return (
    <Image
      style={{ width: 80, height: 50 }}
      source={require('../assets/peter.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="black"
              />),
            headerLeft: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="black"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

