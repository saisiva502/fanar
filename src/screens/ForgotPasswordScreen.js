import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  StatusBar,
  I18nManager,
  Button,
  AsyncStorage
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Form, TextValidator } from 'react-native-validator-form';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

export default class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    header: null
  };


  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.welcomeContainer}>
        <ImageBackground source={require('../../assets/images/light.png')} style={styles.image}>
          <Image source={require('../../assets/images/logo_fanar.png')} style={styles.logo}/>
          <View style={styles.form}>
              <Form
                ref="form"
                onSubmit={this.handleSubmit}
                style={{padding: 10}}
              >
                <Text style={styles.label}>Mobile Number</Text>
                <TextValidator
                    name="email"
                    label="Emsil"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="+963 ********"
                    type="text"
                    keyboardType="numeric"
                    value=""
                    underlineColorAndroid="transparent"
                    onChangeText=""
                    style={styles.input}
                />
            </Form>
            <TouchableOpacity onPress={() => navigate('OtpScreen')} style={styles.button}>
              <LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}} 
colors={['#f26060', '#3bb6ff']} style={styles.linearGradient}><Text style={{fontSize: 16, color: '#fff'}}>VERIFY <Icon style={{paddingLeft: 10, textAlign: 'right', fontSize: 12}} name="arrow-right" size={30} color="#fff" /></Text></LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'SFProText-Regular',
    backgroundColor: 'transparent',
  },
  logo:{
    position: 'absolute',
    top: 30,
    width: 150,
    height: 90
  },
  label:{
    color: '#000',
    paddingTop: 10,
    paddingBottom: 0,
    fontWeight: 'bold'
  },
  free_trail:{
    padding: 10,
    borderRadius: 30,
    borderColor: '#3bb6ff',
    borderWidth: 2,
    fontSize: 14
  },
  passwordRowView:{
    flexDirection: 'row',
    // width: '100%',
  },
  forgotPass:{
    position: 'absolute',
    right: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "center",
    width: '100%'
  },
  linearGradient: {
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    width: '50%',
    borderRadius: 10
  },
  icons_grp:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    borderRadius: 100,
    borderColor: '#900',
    padding: 5,
    width: 40,
    textAlign: 'center',
    margin: 10,
    height: 40,
    borderWidth: 2
  },
  form: {
    marginTop: 20,
    color: '#000',
    width: '100%',
    padding: 30
  },
  input:{
    paddingBottom:0,
    paddingTop: 20,
    width: '100%',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#A7ADAB',
  },
  button:{
    padding: 5,
    marginTop: 20,
    alignItems: 'center'
  }

});