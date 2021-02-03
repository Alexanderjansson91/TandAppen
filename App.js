import React, { Component } from 'react';

import MainNavigation from './navigation/MainNavigation';
import FirebaseApp from './Firebase';

export class App extends Component {
  render() {
    return (
      <MainNavigation>
        <FirebaseApp />
      </MainNavigation>
    );
  }
}
export default App;
