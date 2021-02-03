import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//My camera button component
const CameraButtons = (props) => {
  const { viewContainer } = styles;
  return (
    <View style={viewContainer}>
      <TouchableOpacity style={styles.profilContainer} onPress={props.click}>
        <View style={styles.buttonView}>
          <MatetrialCommunityIcons
            name={props.icon}
            color="#875195"
            size={35}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

//Styles for my header
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 20,
  },
  profilContainer: {
    height: 50,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'solid',
    borderRadius: 50,
    borderColor: '#875195',
    borderBottomWidth: 1,
    textAlignVertical: 'center',
  },

  buttonView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginBottom: 10,
  },

  textButton: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default CameraButtons;
