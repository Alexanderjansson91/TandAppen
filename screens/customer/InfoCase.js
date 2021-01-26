import React, { useRef } from 'react'

import {View,StyleSheet,ScrollView, TextInput,Button} from 'react-native'

import Header from '../../components/style/Header'
import MainView from '../../components/style/MainView'
import CheckList from '../../components/data/CheckListArray'
import Heading from '../../components/text/HeadingText'
import SubHeading from '../../components/text/Subheading'
import ButtonNav from '../../components/buttons/PageButton'

export default function InfoCase({navigation}) {

    return (
      <ScrollView>
       <View style={styles.topContainer}>
           <Header headerText="Nordic Dental" click={() => navigation.navigate("Login")} icon="account-circle" ></Header>
           <MainView></MainView>
           <Heading Heading="Nytt ärende"></Heading>
           <SubHeading subHeading="Tänk på följande vid Fotograferingen."></SubHeading>
           <CheckList></CheckList>
         <ButtonNav textInfo="Starta"  click={() => navigation.navigate("NewCase")} />
       </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({

    topContainer: {
      backgroundColor: '#fff',
      flex: 1,
  
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  

  });
