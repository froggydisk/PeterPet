import React from 'react';
import {StyleSheet, Text, View} from "react-native";

function ChatScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.font}>Chat!</Text>
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
        fontSize: 32,
        marginBottom: 10,
      },
    });

export default ChatScreen;