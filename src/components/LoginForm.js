import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner  } from './common';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false };



  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

     firebase.auth().signInWithEmailAndPassword(email, password)
      .catch( () => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch( () => {
              this.setState({ error: 'Une erreur est survenue :( ' });
          });
      });
    }

    renderButton(){
      if(this.state.loading){
        return <Spinner size="small" />;
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        );
    }


  render() {
     const { errorStyle } = styles;
    return (
      <Card >
        <CardSection >
          <Input
          placeholder="toto@gmail.com"
          label="E-mail"
          value={this.state.email}
          onChangeText={ email => this.setState({ email })}
          />
        </CardSection>

        <CardSection >
          <Input
          placeholder="*********"
          label="Password"
          value={this.state.password}
          onChangeText={ password => this.setState({ password })}
          secureTextEntry
          />
        </CardSection>

        <Text style={errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
              {this.renderButton()}
        </CardSection>
      </Card >

      );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }

};

export default LoginForm;
