import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



//My header View
const CheckListArray = () => {

  const iconArray = <MatetrialCommunityIcons name="check-circle" color="#875195" size={26} />
  const { viewContainer } = styles;
  const array = [
    { item: ' Bra ljus i rummet.', icon: iconArray },
    { item: ' Bra vinkel', icon: iconArray },
    { item: ' Vit bakrund', icon: iconArray },
    { item: ' Osäker, se exempel på respektive sida', icon: iconArray },
  ]

  const [, , , { item }] = array;
  console.log(item);

  return (
    <View style={viewContainer}>
      <FlatList style={styles.checkFlatList}
        data={Object.keys(array)}
        renderItem={({ item }) =>
          <Text style={styles.flatListText}>
            {array[item].icon}{array[item].item}
            {(item[3])}
          </Text>}
      />
    </View>
  )
}

//Styles for my checkList Array    
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    height: 400,
  },
  checkFlatList: {
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 0,
  },
  textTrue: {
    color: 'white'
  },
  textFalse: {
    color: 'green'
  },
  flatListText: {
    margin: 20,
    fontSize: 20,
  },
  colorText: {
    color: "#ffffff"
  },


});

export default CheckListArray;