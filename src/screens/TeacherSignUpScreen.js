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
import { Col, Row, Grid } from "react-native-easy-grid";

export default class TeacherSignUpScreen extends Component {
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
            <Text style={{fontSize: 25, marginBottom: 30}}>Sign Up</Text>
              <Form
                ref="form"
                onSubmit={this.handleSubmit}
                style={{padding: 10}}
              >
                <TextValidator
                    name="email"
                    label="Full Name"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="FULL NAME"
                    type="text"
                    keyboardType="normal"
                    value=""
                    underlineColorAndroid="transparent"
                    onChangeText=""
                    style={styles.input}
                />
               <TextValidator
                  name="phonr"
                  label="Phone Number"
                  validators={['required', 'isEmail']}
                  errorMessages={['This field is required', 'Email invalid']}
                  placeholder="MOBILE NUMBER"
                  type="numeric"
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value=""
                  onChangeText=""
                  style={styles.input}

              />
              <View style={{flexDirection: 'row'}}>
                <View>
                  <TextValidator
                    name="email"
                    label="Full Name"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="PASSWORD"
                    type="text"
                    keyboardType="normal"
                    value=""
                    underlineColorAndroid="transparent"
                    onChangeText=""
                    style={styles.grid_input}
                />
               <TextValidator
                  name="phonr"
                  label="Phone Number"
                  validators={['required', 'isEmail']}
                  errorMessages={['This field is required', 'Email invalid']}
                  placeholder="Instagram Followers"
                  type="numeric"
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value=""
                  onChangeText=""
                  style={styles.grid_input}

              />
                </View>
                <View>
                  <TextValidator
                    name="email"
                    label="Full Name"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="CONF.PASSWORD"
                    type="text"
                    keyboardType="normal"
                    value=""
                    underlineColorAndroid="transparent"
                    onChangeText=""
                    style={styles.grid_input}
                  />
                <TextValidator
                  name="phonr"
                  label="Phone Number"
                  validators={['required', 'isEmail']}
                  errorMessages={['This field is required', 'Email invalid']}
                  placeholder="Snapchat Followers"
                  type="numeric"
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value=""
                  onChangeText=""
                  style={styles.grid_input}
                />
                </View>
              </View>
            </Form>
            <TouchableOpacity onPress={() => navigate('TeacherHomeScreen')}  style={styles.button}>
              <LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}}
colors={['#f26060', '#3bb6ff']} style={styles.linearGradient}>
                <Text style={{fontSize: 16, color: '#fff'}}>SIGN UP <Icon style={{textAlign: 'right', fontSize: 12}} name="arrow-right" size={30} color="#fff" /></Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: '#900'}}> Already have an account ? </Text>
            <Text style={{fontSize: 14, color: '#900',marginLeft: 10}}
                onPress={() => navigate('LoginScreen')}>
                  SIGN IN
              </Text>
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
    // position: 'absolute',
    top: 20,
    width: 150,
    height: 90
  },
  label:{
    color: '#000',
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
    marginTop: 50,
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
  grid_input:{
    paddingBottom:0,
    // width: '100%',
    marginRight: 10,
    paddingTop: 20,
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