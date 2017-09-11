import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = { LoggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBGltpKYhHXsRNFTHM_I8Zl1ON34oYS3ZI",
      authDomain: "auth-4ce11.firebaseapp.com",
      databaseURL: "https://auth-4ce11.firebaseio.com",
      projectId: "auth-4ce11",
      storageBucket: "auth-4ce11.appspot.com",
      messagingSenderId: "803019534852"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

    renderContent () {
        switch (this.state.loggedIn) {
          case true:
            return (
              <CardSection>
                <Button onPress={ () => firebase.auth().signOut()}>
                  Sign out
                </Button>
              </CardSection>
            );
          case false:
            return <LoginForm />;
          default:
            return <Spinner size="large" />;
        }
    }




  render(){
    return (
      <View>
        <Header  headerText="Authentication"/>
          {this.renderContent()}
      </View>
      );
  }
}

export default App;
