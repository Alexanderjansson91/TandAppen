import React, { useRef } from 'react'

import {View,StyleSheet,ScrollView, TextInput,Button} from 'react-native'

import Header from '../../components/views/Header'
import MainView from '../../components/views/MainView'
import CheckList from '../../components/data/CheckListArray'
import Heading from '../../components/text/HeadingText'
import SubHeading from '../../components/text/Subheading'
import ButtonNav from '../../components/buttons/PageButton'

export default function InfoCase({navigation}) {

    return (
      <ScrollView style={styles.topContainer}>
       <View style={styles.topContainer}>
           <Header headerText="Nordic Dental" click={() => navigation.navigate("Login")} icon="account-circle" ></Header>
           <MainView></MainView>
           <Heading Heading="Nytt ärende"></Heading>
           <SubHeading subHeading="Tänk på följande vid Fotograferingen."></SubHeading>
           <CheckList></CheckList>
         <ButtonNav textInfo="Starta" icon="plus" textButton="Läs mer" click={() => navigation.navigate("NewCase")} />
       </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({

    topContainer: {
      backgroundColor: '#ffffff',
      flex: 1,
      
  
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  

  });
