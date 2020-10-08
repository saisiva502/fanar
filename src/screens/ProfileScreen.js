import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  StatusBar,
  I18nManager,
  AsyncStorage
} from 'react-native';
// import { NavigationActions } from 'react-navigation'
import { StackActions, NavigationActions } from 'react-navigation';
// import OneSignal from 'react-native-onesignal'; // Import package from node modules
import HeaderComponent from '../components/Header';
import NavBarComponent from '../components/NavBar';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';

// import config from '../config';
// import MainWrapper from '../components/MainWrapper';
// import Logo from '../components/Logo';
// // import RNRestart from 'react-native-restart';
import _ from 'lodash';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const meetings = [1, 2, 3]
    return (
      <View style={styles.welcomeContainer}>
        <ImageBackground source={require('../../assets/images/light.png')} style={styles.image}>
          <ScrollView>
          <View style={{position: 'absolute', top: 20, width: '100%', padding: 10}}>
            <HeaderComponent navigation = {this.props.navigation} title="Profile" />
          </View>
          <View style={{marginTop: 50, padding: 30}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={require('../../assets/images/user.png')} style={{borderRadius: 50, height: 100, width: 100}} />
                <Image source={require('../../assets/images/edit.png')} style={{position: 'absolute', top: 5, right: 0, height: 30, width: 30}} />
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>Ahmed zahoor</Text>
                <Text style={{color: '#000', marginTop: 5,}}>Makkah, Saudi Arebia</Text>
                <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                  <Text style={{marginRight: 20}}>Fan</Text>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={4}
                    fullStarColor={'#000000'}
                    starStyle={{
                      fontSize: 15
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>OVERVIEW</Text>
              <Text>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>UPCOMING MEET</Text>
              <View>
                <ScrollView style={{paddingTop: 15}} showsHorizontalScrollIndicator={false} horizontal={true}>
                 
                  {
                     meetings.map(item=>{
                      return(
                        <View style={styles.up_event}>
                          <View>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}> 29</Text>
                            <Text style={{fontSize: 18}}> Oct </Text>
                          </View>
                          <View style={{marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#4fb2f7'}}> JR7</Text>
                            <Text style={{fontSize: 14, color: '#000'}}> 12:00 - 13:00 </Text>
                          </View>
                        </View>
                      )
                    })
                  } 
                </ScrollView>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft: 10, width: '50%'}}>
                  <Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10, fontSize: 14}}>ACCOUNT BALANCE</Text>
                  <View style={{height: 70, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}> $ <Text style={{fontSize: 22}}>500</Text></Text>
                    <Icon style={{position:'absolute', top: 5, right: 5}} name="plus" size={15} color="#4fb2f7" />
                  </View>
                </View><View style={{marginLeft: 10, width: '50%'}}>
                  <Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10,  fontSize: 14}}>LAST TRANS</Text>
                  <View style={{height: 70, backgroundColor: '#fff', flexDirection: 'row', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#4fb2f7'}}> Hussam </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}> $ <Text style={{fontSize: 22}}>500</Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20, marginLeft: 20}}>
              <Text style={{color: '#4fb2f7',fontSize: 20, fontWeight: 'bold'}}>Favourites <Icon style={{position:'absolute', top: 5, marginLeft: 15, right: 5}} name="arrow-right" size={20} color="#4fb2f7" /></Text>
            </View>
          </View>
          </ScrollView>
          <NavBarComponent />
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  welcomeContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
  },
  up_event:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    padding: 5, 
    marginRight: 10
  },
  acc_event:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
 image: {
    flex: 1,
    resizeMode: "cover",
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