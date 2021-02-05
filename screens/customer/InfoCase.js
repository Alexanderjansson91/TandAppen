import React, { useEffect } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import { LogBox } from 'react-native';

import Header from '../../components/views/Header';
import MainView from '../../components/views/MainView';
import CheckList from '../../components/data/CheckListArray';
import Heading from '../../components/text/HeadingText';
import SubHeading from '../../components/text/Subheading';
import ButtonNav from '../../components/buttons/PageButton';

export default function InfoCase({ navigation }) {
  //Ignore a log how not should display
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  //View for information about a new case
  return (
    <View style={styles.topContainer}>
      <Header
        headerText="Nordic Dental"
        click={() => navigation.navigate('Login')}
        icon="account-circle"
      />
      <MainView />
      <ScrollView style={styles.topContainer}>
        <Heading Heading="Nytt ärende" />
        <SubHeading subHeading="Tänk på följande vid Fotograferingen." />
        <CheckList />
        <ButtonNav
          textInfo="Starta ärende"
          icon="plus"
          textButton="Läs mer"
          click={() => navigation.navigate('NewCase')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
