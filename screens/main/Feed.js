import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import firebase from 'firebase';
require('firebase/firestore');
import { connect } from 'react-redux';
import Header from '../../components/views/Header';
import MainView from '../../components/views/MainView';
import CostumerInfoCard from '../../components/Cards/CustomerInfo';

function Feed(props) {
  const { currentUser, posts } = props;
  console.log({ currentUser, posts });

  //Hook for clean up
  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);

  //Log out current user
  const onLogout = () => {
    firebase.auth().signOut();
  };

  //A view that shows all cases
  return (
    <View style={styles.container}>
      <Header headerText="Tandappen" click={() => onLogout()} icon="logout" />
      <MainView />
      <View style={styles.containerGallery}>
        {/* All item displays in an Flatlist */}
        <FlatList
          horizontal={false}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.containerImage}>
              <CostumerInfoCard
                ImageCustomer={{ uri: item.downloadURL }}
                iconName="account-circle"
                costumerName={item.name}
                iconEmail="email-box"
                costumerEmail={item.email}
                iconPhone="cellphone"
                costumerPhone={item.phone}
                iconMessage="message"
                costumerMessage={item.message}
                iconYear="clock"
                costumerYear={item.count}
              />
            </View>
          )}
        />
        <View style={styles.space} />
      </View>
    </View>
  );
}

//Style for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoContainer: {
    margin: 20,
  },
  containerGallery: {
    margin: 20,
    justifyContent: 'center',
  },
  space: {
    marginBottom: '100%',
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});

//Access the store states from redux
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

export default connect(mapStateToProps, null)(Feed);
