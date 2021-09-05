import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

function CommunityScreen() {

  const [userEmail, setUserEmail] = useState('');

  const onclick = () => {
    const textbox = {
      inText: userEmail,
    };
    fetch("http://localhost:5000/text", { 
      method: "post", //통신방법
      headers: {
        Accept: 'application/json', 
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    });
  };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={(UserEmail) => setUserEmail(UserEmail)}/>
      <Button onPress={onclick} title='전송'/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CommunityScreen;

// import React from 'react';
// import {StyleSheet, Text, View} from "react-native";

// function CommunityScreen() {
//     return (
//         <View style={styles.container}>
//           <Text style={styles.font}>Community</Text>
//         </View>
//       );
//     }
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: '#F5FCFF',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       font: {
//         fontSize: 22,
//         marginBottom: 10,
//       },
//     });

// export default CommunityScreen;
