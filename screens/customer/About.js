import React from 'react';
import Header from '../../components/views/Header';
import MainView from '../../components/views/MainView';
import InfoText from '../../components/text/BodyText';
import HeadlineText from '../../components/text/HeadingText';
import ContactButton from '../../components//buttons/PageButton';
import { View, StyleSheet, Linking } from 'react-native';

//About the App View
export default function Feed({ navigation }) {
  return (
    <View style={styles.topContainer}>
      <Header
        headerText="Nordic Dental"
        click={() => navigation.navigate('Login')}
        icon="account-circle"
      />
      <MainView />
      <HeadlineText Heading="Om oss" />
      <InfoText
        bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      {/* Button hows open the mail App */}
      <ContactButton
        textInfo="Kontakta oss "
        icon="email"
        click={() => Linking.openURL('mailto:alexander_jansson_91@hotmail.com')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
