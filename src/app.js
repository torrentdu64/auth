import React, {Component} from 'react';
import {Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

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
          <Text> App </Text>
      </View>
      );
  }
}

export default App;
