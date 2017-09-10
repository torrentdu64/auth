import React, {Component} from 'react';
import {Card, CardSection, Button, Input  } from './common';

class LoginForm extends Component {

  state = { email: '', password: '' };

  render() {
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

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card >

      );
  }
}

export default LoginForm;
