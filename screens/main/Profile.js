import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
require('firebase/firestore');
import { connect } from 'react-redux';
import Header from '../../components/views/Header';
import MainView from '../../components/views/MainView';
import ResetButton from '../../components/buttons/PageButton';
import ProfileCard from '../../components/Cards/ProfileCard';
import HeaderProfile from '../../components/text/HeadingText';
import InfoTextPassword from '../../components/text/Subheading';

function Profile(props) {
  const { currentUser, posts } = props;
  console.log({ currentUser, posts });

  //Hook how clean up
  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);

  //Log out currentuser
  const onLogout = () => {
    firebase.auth().signOut();
  };

  //Reset password for currentUser adn display an alert
  const forgotPassword = () => {
    var user = firebase.auth().currentUser.email;
    firebase
      .auth()
      .sendPasswordResetEmail(user)
      .then(function () {
        alert('En återställninslänk har skickats till din Email.')
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  //A view that shows the profile
  return (
    <View style={styles.container}>
      <Header
        headerText="Nordic Dental"
        click={() => onLogout()}
        icon="logout"
      />
      <MainView />
      <View style={styles.infoContainer}>
        <ProfileCard
          imageUri={require('../../assets/nordicDental.png')}
          iconName="account-circle"
          coWorkerName={currentUser.name}
          iconEmail="email-box"
          coWorkerEmail={currentUser.email}
        />
        <HeaderProfile Heading="Ändra lösenord?" />
        <InfoTextPassword
          subHeading={'Vi rekommenderar att byta lösenord fyra gånger per år.'}
        />
        <View style={styles.spaceBetween}>
          <ResetButton
            textInfo="Ändra lösenord"
            click={() => forgotPassword()}
            icon="key"
          />
        </View>
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
  spaceBetween: {
    marginTop: 40,
  },
  containerImage: {
    flex: 1 / 3,
    aspectRatio: 1 / 1,
  },
});

//Access the store states from redux
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

export default connect(mapStateToProps, null)(Profile);
