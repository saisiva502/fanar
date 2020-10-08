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

export default class WhoAreYouScreen extends Component {
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
            <Text style={{fontSize: 25, color: '#000', marginBottom: 30, textAlign: 'center'}}>Who are you?</Text>
            <TouchableOpacity onPress={() => navigate('SignUpScreen')} style={styles.button}>
              <LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}} 
  colors={['#bb7990', '#f26060']} style={styles.linearGradient}><Text style={{fontSize: 16, color: '#fff'}}>Fan </Text></LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('WhatAreYouScreen')} style={styles.button}>
              <LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}} 
  colors={['#B7D8EC', '#3bb6ff']} style={styles.linearGradient}><Text style={{fontSize: 16, color: '#fff'}}>Influencer </Text></LinearGradient>
            </TouchableOpacity>
            <View style={{position: 'absolute', bottom: 50, alignItems: 'center'}}>
              <View style={{marginBottom: 50, marginTop: 20}}>
                <TouchableOpacity onPress={() => navigate('LoginScreen')} style={styles.free_trail}>
                  <Text style={{fontSize: 14, color: '#900'}}><Icon style={{fontSize: 12}} name="long-arrow-left" size={30} color="#900" /> Back</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 12, color: '#900'}}> Don't have an account ? </Text>
                <Text style={{fontSize: 14, color: '#900', marginLeft: 10}}
                    onPress={() => navigate('SignUpScreen')}>
                      SIGN UP
                  </Text>
              </View>
            </View>
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
    height: '100%',
    fontFamily: 'SFProText-Regular',
    backgroundColor: 'transparent',
  },
  logo:{
    position: 'absolute',
    top: 50,
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
    padding: 5,
    borderRadius: 30,
    borderColor: '#3bb6ff',
    borderWidth: 2,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 16
  },
  passwordRowView:{
    flexDirection: 'row',
    // width: '100%',
  },
  forgotPass:{
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
    width: '80%',
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
    justifyContent: 'center',
    marginTop: 50,
    color: '#000',
    width: '100%',
    padding: 30,
    height: '100%',
    alignItems: 'center'
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
    alignItems: 'center',
    width: '100%'
  }

});