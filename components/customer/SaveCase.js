import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native';
require("firebase/firestore")
require("firebase/firebase-storage")



export default function Save(props, {navigation}) {

    const [caption, setCaption] = useState(" ")

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = (`post/${Math.random().toString(36)}`);
        console.log(childPath);

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
        .storage()
        .ref()
        .child(childPath)
        .put(blob)

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred} `);
        }
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) =>  {
                savePostData(snapshot)
                console.log(snapshot);
            })
        }
        const taskError = snapshot =>{
            console.log(snapshot);
        }
        task.on("state_changed", taskProgress, taskError, taskCompleted)
    }


 

    const savePostData = (downloadURL) => {
        firebase.firestore()
        .collection("posts")
        .doc("newpost")
        .collection("userPosts")
        .add({
            downloadURL,
            caption,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
            props.navigation.popToTop()
        }))
    }

    return (
       <View style={{flex:1}}>
           <Image source= {{uri: props.route.params.image}} ></Image>
           <TextInput 
            placeholder="Skriv  en beskrivning"
            onChangeText={(caption) => setCaption(caption)}
           />
           <Button 
           title="Skicka"
           onPress={() => uploadImage()}
           /> 
       </View>
    )
}
