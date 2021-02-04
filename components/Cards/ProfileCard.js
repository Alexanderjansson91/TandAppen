import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Profile card
const ProfileCard = (props) => {
  const { viewContainer, infoText } = styles;
  return (
    <View style={viewContainer}>
      <View style={styles.space} />
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          style={styles.icon}
          name={props.iconName}
          color="black"
          size={26}
        />
        <Text style={infoText}>{props.coWorkerName}</Text>
      </View>
      <View style={styles.ImageView}>
        <Image style={styles.image} source={props.imageUri} />
      </View>
      <View style={styles.parent}>
        <MatetrialCommunityIcons
          style={styles.icon}
          name={props.iconEmail}
          color="black"
          size={26}
        />
        <Text style={infoText}>{props.coWorkerEmail}</Text>
      </View>
    </View>
  );
};

//Styles for my header
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: 180,
    marginBottom: 110,
    borderColor: '#E8E8E8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  space: {
    marginTop: 20,
  },
  icon: {
    color: '#875195',
    fontSize: 25,
    marginLeft: 20,
  },
  infoText: {
    color: '#875195',
    fontSize: 20,
    margin: 10,
    marginLeft: 20,
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
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
    resizeMode: 'contain',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#875195',
  },
  ImageView: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 0,
    textAlignVertical: 'center',
    position: 'absolute',
    right: 0,
  },
});

export default ProfileCard;
