import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

//Password Textfield used in sign up page
const PasswordTextField = (props) => {
  const { viewContainer, textInput } = styles;
  return (
    <View style={viewContainer}>
      <TextInput
        placeholder={props.placeHolder}
        onChangeText={props.onChange}
        secureTextEntry={props.secureText}
        style={textInput}
      />
    </View>
  );
};

//Style for textfield
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: 40,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#875195',
    width: 300,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  textInput: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    alignItems: 'center',
    fontWeight: '600',
    color: 'black',
    fontSize: 17,
  },
});

export default PasswordTextField;
