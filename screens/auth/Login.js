import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

import EmailInputField from '../../components/textfields/EmailTextField'
import PasswordInputField from '../../components/textfields/PasswordTextField'

import SignInButton from '../../components/buttons/PageButton'
import Heading from '../../components/text/HeadingText'
import SubHeading from '../../components/text/Subheading'

import firebase from 'firebase'
export class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.onSignInonSignUp = this.onSignIn.bind(this)
    }

    //Sign in whit Email and password
    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //Sign in View
    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.space}></View>
                <SubHeading subHeading="Enbart inloggning för företag."></SubHeading>
                <SubHeading subHeading="Du som användare behöver inget konto."></SubHeading>
                <EmailInputField
                    placeHolder="Email"
                    onChange={(email) => this.setState({ email })}
                />
                <PasswordInputField
                    placeHolder="Password"
                    onChange={(password) => this.setState({ password })}
                    secureText={true}
                />
                <View style={styles.space}></View>
                <SignInButton
                    click={() => this.onSignIn()}
                    textInfo="Logga in"
                />
                <View style={styles.bottomContainer}>

                </View>

            </View>
        )
    }
}

export default Login

//Style for login Page
const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
    },
    borderstyleesdasd: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black"
    },
    space: {
        marginTop: 40
    },
    bottomContainer: {

    }

});

