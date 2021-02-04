import {
  USER_POSTS_STATE_CHANGE,
  USER_STATE_CHANGE,
  CLEAR_DATA}
  from '../constants/index'
import firebase from 'firebase';
require('firebase/firestore');

export function clearData() {
  return ((dispatch) => {
    dispatch({ type: CLEAR_DATA });
  });
}

//Fetch user from firesstore
export function fetchUser() {
  return ((dispatch) => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log('does not exits ');
        }
      });
  });
}

//Fetch cases from react native
export function fetchUserPosts() {
  return ((dispatch) => {
    firebase
      .firestore()
      .collection('posts')
      .doc('newpost')
      .collection('userPosts')
      .orderBy('creation', 'asc')
      .get()
      .then((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        Promise.all(posts).then(function () {
          dispatch({ type: USER_POSTS_STATE_CHANGE, posts });
        });
      });
  });
}
