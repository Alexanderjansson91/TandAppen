import React, { useState, useRef, useReducer } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';

import TextInputField from '../../components/textfields/InputTextField';
import SubHeading from '../../components/text/Subheading';
import CounterCard from '../../components/Cards/Counter';
import UploadLoader from '../../components/buttons/UploadButton';

import firebase from 'firebase';
require('firebase/firestore');
require('firebase/firebase-storage');

export default function Save(props) {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [message, setMessage] = useState(' ');

  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return 0;
      default:
        throw new Error('Unexpected action');
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const uploadImage = async () => {
    const uri = props.route.params.image;
    const childPath = (`post/${Math.random().toString(36)}`);
    console.log(childPath);

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred} `);
    };
    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        console.log(snapshot);
      });
    };
    const taskError = (snapshot) => {
      console.log(snapshot);
    };
    task.on('state_changed', taskProgress, taskError, taskCompleted);
  };
  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection('posts')
      .doc('newpost')
      .collection('userPosts')
      .add({
        downloadURL,
        name,
        email,
        phone,
        message,
        count,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
       }).then((function () {
        props.navigation.popToTop();
      }
   ));
};
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >
    <View style={styles.viewContainer}>
      <Image source={{ uri: props.route.params.image }} />
      <View style={styles.space} />
      <View style={styles.paddingHeader}>
      <SubHeading subHeading="Fyll i dina uppgifter nedan, så kontaktar vi dig inom 24 timmar." />
      </View>
      <View style={styles.space} />
      <TextInputField
        onSubmit={() => inputEl2.current.focus()}
        placeHolder="Namn"
        changeText={(name) => setName(name)}
      />
      <TextInputField
        onSubmit={() => inputEl3.current.focus()}
        inputRef={inputEl2}
        placeHolder="E-post"
        changeText={(email) => setEmail(email)}
      />
      <TextInputField
        onSubmit={() => inputEl4.current.focus()}
        inputRef={inputEl3}
        placeHolder="Telefon"
        changeText={(phone) => setPhone(phone)}
      />
      <TextInputField 
        placeHolder="Meddelande"
        inputRef={inputEl4}
        changeText={(message) => setMessage(message)}
      />
      <View style={styles.space} />
      <SubHeading subHeading="När var du oss tandläkaren senast?" />
      <CounterCard
        counterMinusClick={() => dispatch('decrement')}
        iconMinus="minus-circle"
        counterPlusClick={() => dispatch('increment')}
        iconPlus="plus-circle"
        yearText=" år"
        numberOfYearText={count}
        changeText={(count) => dispatch(count)}
      />
      <UploadLoader
        uploadClick={() => uploadImage()}
        submitText="Skicka"
        icon="send"
      />
    </View>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  paddingHeader:{
    marginLeft: 30,
    marginTop: 25,
    marginRight: 30,
  },
  viewContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  borderstyleesdasd:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  space: {
 marginTop:40
  },
});
