import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'
import Header from '../../components/views/Header'
import MainView from '../../components/views/MainView'
import CostumerInfoCard from '../../components/Cards/CustomerInfo'
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


function Feed(props) {
    const { currentUser, posts } = props;
    console.log({ currentUser, posts });

    const onLogout = () => {
        firebase.auth().signOut();
    }

    const deleteData = () =>  {
         firebase.firestore()
        .collection("posts")
        .doc("newpost")
        .collection("userPosts")
        .delete()
        .then(() => {
    console.log('User deleted!');
  });
    }

    return (
        <View style={styles.container}>
            <Header headerText="Nordic Dental" click={() => onLogout()} icon="logout" ></Header>
            <MainView></MainView>
            <View style={styles.containerGallery}>
                <FlatList

                    horizontal={false}
                    data={posts}
                    renderItem={({ item }) => (
                        <View style={styles.containerImage}>
                            <CostumerInfoCard ImageCustomer={{ uri: item.downloadURL }}
                                iconName="account-circle" costumerName={item.name}
                                iconEmail="email-box" costumerEmail={item.email}
                                iconPhone="cellphone" costumerPhone={item.phone}
                                iconMessage="message" costumerMessage={item.message}
                                iconYear="clock" costumerYear={item.count}
                            />
                            <Button onPress={() => {deleteData(item)}} title="Ta bort"></Button>

                        
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    infoContainer: {
        margin: 20
    },
    containerGallery: {
        margin: 20,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    },
    containerImage: {

    }
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
})

export default connect(mapStateToProps, null)(Feed)
