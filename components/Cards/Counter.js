import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//My counter card
const Counter = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        {/* Minus button */}
        <TouchableOpacity
          style={styles.profilContainer}
          onPress={props.counterMinusClick}
        >
          <View style={styles.buttonView}>
            <Text style={styles.textButton}>{props.minusText}</Text>
            <MatetrialCommunityIcons
              name={props.iconMinus}
              style={styles.iconStyle}
            />
          </View>
        </TouchableOpacity>
        {/* Plus button */}
        <TouchableOpacity
          style={styles.profilContainer}
          onPress={props.counterPlusClick}
        >
          <View style={styles.buttonView}>
            <Text style={styles.textButton}>{props.plusText}</Text>
            <MatetrialCommunityIcons
              name={props.iconPlus}
              style={styles.iconStyle}
            />
          </View>
        </TouchableOpacity>
        {/* The counter response TextFields */}
        <Text
          onChangeText={props.changeText}
          style={styles.responseCounterNumber}
        >
          {props.numberOfYearText}
        </Text>
        <Text style={styles.responseCounterText}>{props.yearText}</Text>
      </View>
    </View>
  );
};

//Styles for my header
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
  },
  responseCounterText: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#875195',
    fontWeight: '500',
    fontSize: 25,
  },
  responseCounterNumber: {
    alignItems: 'center',
    marginLeft: '10%',
    alignSelf: 'center',
    color: '#875195',
    fontWeight: '500',
    fontSize: 30,
  },
  profilContainer: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'solid',
    textAlign: 'center',
    borderColor: 'white',
  },
  iconStyle: {
    color: '#875195',
    fontSize: 25,
    marginLeft: 20,
  },

  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textButton: {
    color: '#875195',
    fontWeight: '500',
    fontSize: 18,
  },
  parent: {
    flexDirection: 'row',
  },
});

export default Counter;
