import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

//Input textfield for the cosumnter info page (SavePage)
const InputTextField = (props) => {
  const { viewContainer, textInput } = styles;
  const { inputRef } = props;
  return (
    <KeyboardAvoidingView>
      <View style={viewContainer}>
        <TextInput
          placeholder={props.placeHolder}
          onChangeText={props.changeText}
          style={textInput}
          ref={inputRef}
          onSubmitEditing={props.onSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

//Style for textfeilds
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

export default InputTextField;
