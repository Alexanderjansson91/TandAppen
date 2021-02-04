import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/views/Header';
import MainView from '../../components/views/MainView';
import NewCaseButton from '../../components/buttons/PageButton';
import HeadlineLanding from '../../components/text/HeadingText';
import ReadmoreLanding from '../../components/buttons/ReadMore';

export default function Landing({ navigation }) {
  return (
    <View style={styles.Container}>
      <View>
        <Header
          headerText="Nordic Dental"
          click={() => navigation.navigate('Login')}
          icon="account-circle"
        />
        <MainView />
      </View>
      <View style={styles.insideContainer}>
        <HeadlineLanding Heading="En enkel och personlig bedömning av invisalign" />
        <ReadmoreLanding textButton="Läs mer" />
        <HeadlineLanding Heading="Behöver du hjälp med finansieringen?" />
        <ReadmoreLanding textButton="Läs mer" />
        <NewCaseButton
          textInfo="Nytt ärende"
          icon="plus"
          click={() => navigation.navigate('Case')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  insideContainer: {
    backgroundColor: '#ffffff',
    height: 600,
    marginTop: 40,
  },
});
