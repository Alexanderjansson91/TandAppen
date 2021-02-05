import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Heading text that I use in the app
const HeadingText = (props) => {
  const { viewContainer, headingText } = styles;
  return (
    <View style={viewContainer}>
      <Text style={headingText}>{props.Heading}</Text>
    </View>
  );
};

//Styles for my heading text
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: 60,
    marginLeft: '5%',
    marginRight: '5%',
  },
  headingText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#875195',
    fontSize: 23,
  },
});

export default HeadingText;
