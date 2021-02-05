import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Card how display the info from the costumer
const CustomerInfo = (props) => {
  const { viewContainer, infoText } = styles;
  return (
    <View style={viewContainer}>
      <View style={styles.space} />
      {/* Textfields how handle the info about the costumers */}
      <Image style={styles.image} source={props.ImageCustomer} />
      <View style={styles.space} />
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          name={props.iconName}
          style={styles.iconStyle}
        />
        <Text style={infoText}>{props.costumerName}</Text>
      </View>
      <View style={styles.underline} />
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          name={props.iconEmail}
          style={styles.iconStyle}
        />
        <Text style={infoText}>{props.costumerEmail}</Text>
      </View>
      <View style={styles.underline} />
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          name={props.iconPhone}
          style={styles.iconStyle}
        />
        <Text style={infoText}>{props.costumerPhone}</Text>
      </View>
      <View style={styles.underline} />
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          name={props.iconMessage}
          style={styles.iconStyle}
        />
        <Text style={infoText}>{props.costumerMessage}</Text>
      </View>
      <View style={styles.underline} />
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          name={props.iconYear}
          style={styles.iconStyle}
        />
        <Text style={infoText}>{props.costumerYear} år</Text>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

//Styles for my header
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: 600,
  },
  iconStyle: {
    fontSize: 25,
    color: '#875195',
    margin: 10,
  },
  infoText: {
    marginLeft: 10,
    color: '#875195',
    fontSize: 20,
    margin: 10,
  },
  underline: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
  },
  parent: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    height: '80%',
  },
});

export default CustomerInfo;
