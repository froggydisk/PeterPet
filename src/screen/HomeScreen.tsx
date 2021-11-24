import React, { Component, useEffect, useState } from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import DatePicker from 'react-native-neat-date-picker';
import {firebase_db} from "../firebaseConfig"


export default function HomeScreen() { 

  const [data, setData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())
  }

  // expo-font모듈로 custom font 적용 부분
  const [loaded] = useFonts({
    DancingScript: require('../../assets/fonts/DancingScript-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  firebase_db.ref()
  .once('value')
  .then(snapshot => {
  console.log('User data: ', snapshot.val());
  var poster = snapshot.val();
  setData(poster)
  });

  // 본문
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDatePicker} style={styles.button}> 
         <AntDesign name="calendar" size={20} color="#283328" />
         <Text style={{left:5}}>Calendar</Text>
        </TouchableOpacity>
        <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        />
      </View>
      <View style={styles.title}><Text>title</Text></View>
      <View style={styles.content}>
        <Text><Text style={{fontFamily:'DancingScript'}}>PeterPet</Text> is coming soon!</Text>
        <Text>Please wait for a while</Text>
      </View>
      <View style={styles.footer}>
        {
          data.map(value => {
            return(
            <View>
              <Image style={{height: 100, width: 100}} source={{uri: value.image}} />
              <Text>{value.name}</Text>
            </View>
            )
          })
        }
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'9%',
    justifyContent: 'center',
    alignItems: 'baseline',
    backgroundColor: '#ff9a9a',
    padding: 10,
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    backgroundColor: '#1ad657',
  },
  button: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: "center",
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#BDBDBD",
  },
});
