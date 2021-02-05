import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Contact card for companys, used on Login page
const ContactCard = (props) => {
  const { viewContainer, infoText } = styles;
  return (
    <View style={viewContainer}>
      <View style={styles.space} />
      <View style={styles.parent}>
        <Text style={infoText}>{props.readMoreText}</Text>
        <View style={styles.parent}>
          <TouchableOpacity onPress={props.click}>
            <View>
              <Text style={styles.textButton}>{props.textInfo}</Text>
              <MatetrialCommunityIcons
                name={props.icon}
                style={styles.iconStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

//Style for card
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: 40,
    bottom: 0,
    marginBottom: 40,
    alignSelf: 'center',
  },

  space: {
    marginTop: 20,
  },
  iconStyle: {
    color: '#875195',
    fontSize: 25,
    marginLeft: 20,
  },
  textButton: {
    color: '#EFA600',
    fontSize: 20,
    marginLeft: 10,
    marginTop: -2,
  },
  infoText: {
    color: '#875195',
    fontSize: 17,
    marginLeft: 10,
    marginTop: 0,
  },
  welcomeNameUser: {
    color: '#875195',
    fontSize: 20,
    marginTop: 0,
  },
  parent: {
    flexDirection: 'row',
  },
});

export default ContactCard;
