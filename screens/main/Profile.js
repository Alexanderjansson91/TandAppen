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

  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);

  const onLogout = () => {
    firebase.auth().signOut();
  };
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
          subHeading={'Vi rekommenderar att byta lösenord 4 gånger per år.'}
        />
        <View style={styles.spaceBetween}>
          <ResetButton
            textInfo="Ändra lösenord"
            click={() => forgotPassword()}
          />
        </View>
      </View>
    </View>
  );
}

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

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

export default connect(mapStateToProps, null)(Profile);
