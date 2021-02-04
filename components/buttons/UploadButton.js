import React, { useState } from 'react';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const UploadLoader = (props) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <TouchableOpacity style={styles.profilContainer} onPress= {() =>{startLoading(); props.uploadClick(); }}>
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>{props.submitText}</Text>
              <MatetrialCommunityIcons
                style={styles.iconStyles}
                name={props.icon}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: 50,
    width: 200,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderRadius: 30,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#875195',
    marginTop: '10%',
  },
  spinnerTextStyle: {
    color: '#ffffff',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  iconStyles: {
    fontSize: 25,
    marginLeft: 12,
    color: '#EFA600',
  },
  textButton: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default UploadLoader;
