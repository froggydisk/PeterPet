import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 

import HomeScreen from "./screen/HomeScreen"
import SettingsScreen from "./screen/SettingsScreen"
import ChatScreen from "./screen/ChatScreen"
import CommunityScreen from "./screen/CommunityScreen"
import ProfileScreen from "./screen/ProfileScreen"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{
        headerTitleStyle: {
          fontSize: 18,
          textAlign: 'center',
        },}} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
