import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCpvg8PoAxOdxC63GDS0LS6vBx2v85Gezk",
      authDomain: "authentication-58e84.firebaseapp.com",
      databaseURL: "https://authentication-58e84.firebaseio.com",
      projectId: "authentication-58e84",
      storageBucket: "authentication-58e84.appspot.com",
      messagingSenderId: "62794185784"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;