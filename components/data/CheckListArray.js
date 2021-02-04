import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//My header View
const CheckListArray = () => {
  const iconArray = <MatetrialCommunityIcons name="check-circle" style={styles.iconStyle}/>;
  const { viewContainer } = styles;
  const array = [
    { key: 1, item: ' Bra ljus i rummet', icon: iconArray },
    { key: 2, item: ' Följ stegen noggrant', icon: iconArray },
    { key: 3, item: ' Bra vinkel', icon: iconArray },
    { key: 4, item: ' Ljus bakrund', icon: iconArray },
    { key: 5, item: ' Osäker, se exempel på respektive sida', icon: iconArray },
  ];

  return (
    <View style={viewContainer}>
      <FlatList
        style={styles.checkFlatList}
        data={Object.keys(array)}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => 
          <Text style={styles.flatListText}>
            {array[item].icon}
            {array[item].item}
          </Text>
        }
      />
    </View>
  );
};

//Styles for my checkList Array
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginBottom: 60,
  },
  iconStyle: {
    color: '#875195',
    fontSize: 25,
    marginLeft: 20,
  },
  checkFlatList: {
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 0,
  },
  textTrue: {
    color: 'white',
  },
  textFalse: {
    color: 'green',
  },
  flatListText: {
    margin: 20,
    fontSize: 20,
  },
  colorText: {
    color: '#ffffff',
  },
});

export default CheckListArray;
