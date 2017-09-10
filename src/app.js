import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBGltpKYhHXsRNFTHM_I8Zl1ON34oYS3ZI",
      authDomain: "auth-4ce11.firebaseapp.com",
      databaseURL: "https://auth-4ce11.firebaseio.com",
      projectId: "auth-4ce11",
      storageBucket: "auth-4ce11.appspot.com",
      messagingSenderId: "803019534852"
    });
  }

  render(){
    return (
      <View>
        <Header  headerText="Authentication"/>
          <LoginForm />
      </View>
      );
  }
}

export default App;
