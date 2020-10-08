import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  I18nManager,
  AsyncStorage
} from 'react-native';
// import { NavigationActions } from 'react-navigation'
import { StackActions, NavigationActions } from 'react-navigation';
// import OneSignal from 'react-native-onesignal'; // Import package from node modules

// import config from '../config';
// import MainWrapper from '../components/MainWrapper';
// import Logo from '../components/Logo';
// // import RNRestart from 'react-native-restart';
import _ from 'lodash';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };


  UNSAFE_componentWillMount() {                                                                                                                                                                                                                                                            
    this.timeouts = [];
    //StatusBar.setHidden(true);
    // let localePath = 'props.navigation.state.params.locale';
    // this.locale = _.get(this, localePath, config.DEFAULT_LOCALE);

    AsyncStorage.getItem('user', (err, locale) => {
      if (locale !== null) {
        this.timeouts.push(setTimeout(() => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Home',
                params: { locale: locale }
              })
            ]
          }))
        }, 3000));
      }else{
        this.timeouts.push(setTimeout(() => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'LoginScreen',
              })
            ]
          }))
        }, 3000));
      }
    });

  }

//   // myiOSPromptCallback(permission){
//   //   co
//   // }


// // change the value from true to false
  componentWillUnmount() {
    //StatusBar.setHidden(false);
    this.timeouts.forEach(clearTimeout);
  }



  render() {
    return (
      <View style={styles.welcomeContainer}>
        <ImageBackground source={require('../../assets/images/light.png')} style={styles.image}>
          <Image source={require('../../assets/images/logo_fanar.png')} style={{ width: 250, height: 150}}/>
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
    backgroundColor: 'transparent',
  },
 image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "center",
    width: '100%'
  },
  formContainer: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    marginTop: 10
  },
  formButton: {
    backgroundColor: '#227799',
    opacity: 0.8,
    padding: 15,
    margin: 10
  },
  buttonText: {
    color: '#FFFFFF',
    
  }
});