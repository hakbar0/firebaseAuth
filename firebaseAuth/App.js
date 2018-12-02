import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null }


  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCpvg8PoAxOdxC63GDS0LS6vBx2v85Gezk",
      authDomain: "authentication-58e84.firebaseapp.com",
      databaseURL: "https://authentication-58e84.firebaseio.com",
      projectId: "authentication-58e84",
      storageBucket: "authentication-58e84.appspot.com",
      messagingSenderId: "62794185784"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()} >
              Log Out
      </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;