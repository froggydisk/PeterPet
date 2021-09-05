import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Fontisto } from '@expo/vector-icons'; 
import IconBadge from 'react-native-icon-badge';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DataProvider} from './hooks';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
    // headerTitleStyle: {
    //   fontSize: 18,
    //   textAlign: 'center',},},
    headerShown: false, tabBarBadge: 1 }} />
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

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const [loaded] = useFonts({
    DancingScript: require('../assets/fonts/DancingScript-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                  <TouchableOpacity 
                    style={{paddingHorizontal: 12}}
                    onPress={onPress}
                    >
                    <IconBadge
                      MainElement={
                        <Fontisto name="bell" size={20} color='#283328'/>
                      }
                      BadgeElement={
                        <Text style={[{color:'#FFFFFF'},{fontSize: 10}]}>{count}</Text>
                      }
                      IconBadgeStyle={
                        {width:10,
                        height:10,
                        borderRadius: 10,
                        top: 0,
                        left: 5,
                        backgroundColor: 'red'}
                      }
                      Hidden={count==0}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => alert('This is a basket!')
                    }>
                    <Fontisto name="shopping-basket" size={20} color="#283328"/>
                  </TouchableOpacity>
                </View>),
              headerLeft: () => (
                <Text style={[{fontFamily:'DancingScript'},{fontSize: 18}]}>PeterPet</Text>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
