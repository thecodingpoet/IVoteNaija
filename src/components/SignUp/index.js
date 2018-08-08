import React, { Component }  from 'react';
import { Container, Content, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import Step1 from './step_1';
import Step2 from './step_2';

class SignUp extends Component {
  state = {
    step1: true
  }

  handleNextButtonClick = () => {
    this.setState({step1: false});
  }

  render() {
    const { step1 } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <View styles={styles.header}>
            <Text style={[styles.text, styles.title]}>Welcome!</Text>
            <Text style={[styles.text, styles.description]}>Let’s get you setup quickly</Text>
          </View>

          { step1 ? <Step1 styles={styles} handleNextButtonClick={this.handleNextButtonClick}/> : <Step2 styles={styles}/> }

          {/* <View style={styles.bottom}>
            <Text style={styles.text}>Have an account? 
              <Text style={[styles.text, styles.logInText]} onPress={() => Actions.login()}> Log in</Text>
            </Text>
          </View> */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 80,
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 30,
  }, 
  description: {
    fontSize: 20,
    marginBottom: 30,
  },
  form: {
    marginTop: 30
  },
  button: {
    marginTop: 20,
    borderRadius: 4,
    height: 60,
  },
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 16,
    color: '#4F5764',
  },
  bold: {
    fontFamily: 'raleway-bold'
  },
  bottom: {
    marginTop: 44
  },
  recover: {
    marginTop: 15
  },
  section: {
    marginTop: 20
  },
  logInText: {
    fontFamily: 'raleway-bold',
    color: '#002728',
  },
  row: {
    flexDirection: 'row'
  }, 
  dots: {
    fontSize:  10,
    marginRight: 5
  },
  dotsView: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  },
  radio: {
    marginRight: 18
  },
  radioText: {
    marginRight: 30
  },
  radioSection: {
    alignItems: 'center',
    marginLeft: 10
  },
  icon: {
    color: '#97A1B3',
  },
  completeButton: {
    marginTop: 50,
  },
  white: {
    color: '#FFF',
  }
});

export default SignUp;