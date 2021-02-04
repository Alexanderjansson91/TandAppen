import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import EmailInputField from '../../components/textfields/EmailTextField';
import PasswordInputField from '../../components/textfields/PasswordTextField';

import SignInButton from '../../components/buttons/PageButton';
import SubHeading from '../../components/text/Subheading';

import firebase from 'firebase';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSignInonSignUp = this.onSignIn.bind(this);
  }
  //Sign in whit Email and password
  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Sign in View
  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.space} />
        <SubHeading subHeading="Enbart inloggning för företag." />
        <SubHeading subHeading="Du som användare behöver inget konto." />
        <EmailInputField
          placeHolder="Email"
          onChange={(email) => this.setState({ email })}
        />
        <PasswordInputField
          placeHolder="Password"
          onChange={(password) => this.setState({ password })}
          secureText={true}
        />
        <View style={styles.space} />
        <SignInButton click={() => this.onSignIn()} textInfo="Logga in" />
      </View>
    );
  }
}

export default Login;

//Style for login Page
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  space: {
    marginTop: 40,
  },
});
