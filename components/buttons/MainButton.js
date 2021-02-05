import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//My Main button
const MainButton = (props) => {
  const { viewContainer } = styles;
  return (
    <View style={viewContainer}>
      <View style={styles.parent}>
        <TouchableOpacity style={styles.buttonContainer} onPress={props.click}>
          <View>
            <MatetrialCommunityIcons
              name={props.icon}
              style={styles.iconStyle}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Styles for my header
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#875195',
    height: 150,
  },
  logoContainer: {
    fontSize: 20,
    marginTop: 50,
    marginLeft: 20,
    color: '#ffffff',
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 25,
    marginLeft: 12,
    color: '#EFA600',
  },
  buttonContainer: {
    fontSize: 20,
    marginTop: 50,
    marginRight: 20,
    color: '#ffffff',
    marginBottom: 40,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default MainButton;
