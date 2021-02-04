import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//My read more button
const PageButton = (props) => {
  const { viewContainer, parent } = styles;
  return (
    <View style={viewContainer}>
      <View style={parent}>
        <TouchableOpacity style={styles.profilContainer} onPress={props.click}>
          <View style={styles.buttonView}>
            <Text style={styles.textButton}>{props.textButton}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Styles for my header
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  profilContainer: {
    height: 20,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonView: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#875195',
    borderBottomWidth: 1,
    width: 80,
    margin: -10,
  },
  textButton: {
    color: '#875195',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default PageButton;
