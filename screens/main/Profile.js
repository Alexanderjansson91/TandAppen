import React from 'react'
import { StyleSheet ,View, Text, Image, FlatList, Button} from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'
import Header from '../../components/style/Header'
import MainView from '../../components/style/MainView'
import ResetButton from '../../components/buttons/PageButton'


function Profile(props) {
    const {currentUser,posts} = props;
    console.log({currentUser,posts});

    const onLogout = () => {
        firebase.auth().signOut();
    }
 var user = firebase.auth().currentUser;
    const forgotPassword = () => {
        var user = firebase.auth().currentUser.email;
        firebase.auth().sendPasswordResetEmail(user)
          .then(function (user) {
            alert('Please check your email...')
          }).catch(function (e) {
            console.log(e)
          })
      }
    

    return (
        <View style={styles.container}>
                    <Header headerText="Nordic Dental" click={() => onLogout()} icon="logout" ></Header>
                    <MainView></MainView>

        <View style={styles.infoContainer}>
            <Text>{currentUser.name}</Text>
            <Text>{currentUser.email}</Text>
            <ResetButton textInfo="Skicka"
            click={() => forgotPassword()}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

 
    },
    infoContainer: {
        margin: 20
    },
    containerGallery:{

    },
    image:{
        flex:1,
        aspectRatio:1/1
    },
    containerImage:{
        flex:1/3,
        aspectRatio:1/1
    }
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
})

export default connect(mapStateToProps, null)(Profile)
