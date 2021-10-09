import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, TextInput, Image, Platform} from "react-native";
import * as ImagePicker from 'expo-image-picker';

function CommunityScreen() {

  const [image, setImage] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const createFormData = (image, body) => {
    const data = new FormData();
  
    data.append("image", {
      name: image.substring(image.lastIndexOf('/') + 1),
      type: 'multipart/form-data',
      uri: image
        // Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
    });
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data;
  };

  const handleUploadImage = () => {
    fetch("http://localhost:5000/api/upload", {
      method: "post",
      headers:{ 
        'Content-Type':'multipart/form-data', 
       },       
      body: createFormData(image, { userId: "123" }),
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload success", response);
        alert("Upload success!");
        setImage(null);
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
  };

  const onclick = () => {
    const textbox = {
      inText: userEmail,
    };
    fetch("http://localhost:5000/api/text", { 
      method: "post", //통신방법
      headers: {
        Accept: 'application/json', 
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    });
  };

  return(
    <View>
      <TextInput style={styles.input} onChangeText={(UserEmail) => setUserEmail(UserEmail)}/>
      <Button onPress={onclick} title='전송'/>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}> 
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
        <React.Fragment> 
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          <Button title="Upload" onPress={handleUploadImage} /> 
        </React.Fragment> 
        )}
      </View> 
    </View> 
  )
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
