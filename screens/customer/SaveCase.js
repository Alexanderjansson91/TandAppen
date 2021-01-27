import React, {useState, useRef, useReducer} from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

import TextInputField from '../../components/textfields/InputTextField'
import SubmitButton from '../../components/buttons/PageButton'
import Heading from '../../components/text/HeadingText'
import SubHeading from '../../components/text/Subheading'

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native';
require("firebase/firestore")
require("firebase/firebase-storage")



export default function Save(props, {navigation}) {

    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [phone, setPhone] = useState(" ")
    const [message, setMessage] = useState(" ")



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
            name,
            email,
            phone,
            message,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
            props.navigation.popToTop()
        }))
    }

        const inputEl = useRef();
        function focus() {
          inputEl.current.focus();
        };
       
    return (
       <View style={styles.viewContainer}>
           <Image source= {{uri: props.route.params.image}} ></Image>
           <View style={styles.space}></View>
           <Heading Heading="Kontaktuppgifter"></Heading>
           <SubHeading subHeading="Lämna dina uppgifter så kontaktar"></SubHeading>
           <SubHeading subHeading="vi dig inom 24 timmar"></SubHeading>
           <TextInputField 
           referens= {inputEl}
           placeHolder="Namn"
           changeText={(name) => setName(name)}
           />
           <TextInputField 
           referens= {inputEl}
           placeHolder="E-post"
           changeText={(email) => setEmail(email)}
           />
           <TextInputField 
           referens= {inputEl}
           placeHolder="Telefon"
           changeText={(phone) => setPhone(phone)}
           />
           <TextInputField 
           referens= {inputEl}
           placeHolder="Meddelande"
           changeText={(message) => setMessage(message)}
           />

           <View style={styles.space}></View>
           <SubmitButton
           textInfo="Skicka"
           click={() => uploadImage()}
           />
      
       </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:'100%',
        width:'100%',
    },  
    borderstyleesdasd:{
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius:10,
        borderColor:"black"
    }, 
    space:{
        marginTop:40
    }

});


