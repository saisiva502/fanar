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
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Col, Row, Grid } from "react-native-easy-grid";

// import config from '../config';
// import MainWrapper from '../components/MainWrapper';
// import Logo from '../components/Logo';
// // import RNRestart from 'react-native-restart';
import _ from 'lodash';

export default class UserProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const reviews = [1, 2, 3,5,6,7,8]
    return (
      <View style={styles.welcomeContainer}>
        <ImageBackground source={require('../../assets/images/light.png')} style={styles.image}>
          <ScrollView>
          <View style={{position: 'absolute', top: 20, width: '100%', padding: 10}}>
            <HeaderComponent navigation = {this.props.navigation} title="Noah william" user={true}/>
          </View>
          <View style={{marginTop: 50, padding: 30}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <View>
                <Image source={require('../../assets/images/user.png')} style={{borderRadius: 50, height: 80, width: 80}} />
                <Icon style={styles.active_icon} name="dot-circle" size={15} color="#00de56" />
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>Noah William</Text>
                <Text style={{color: '#000', marginTop: 5,}}>Influencer</Text>
                <Grid style={{width: '100%'}}>
                  <Row style={{width: '100%', alignItems: 'center'}}>
                    <Col style={{width: '60%', marginRight: 20}}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={4}
                        fullStarColor={'#ffcb00'}
                        starStyle={{
                          fontSize: 15
                        }}
                      />
                    </Col>
                    <Col>
                      <Icon name="youtube" size={30} color="#5d7caa" />
                    </Col>
                  </Row>
                  <Row style={{alignItems: 'center'}}>
                    <Col style={{width: '60%'}}>
                      <Text><Icon name="map-marker-alt" size={15} color="#000" /> New York, NY</Text>
                    </Col>
                    <Col><Text></Text></Col>
                  </Row>
                  <Row style={{alignItems: 'center', marginTop: 5}}>
                    <Col>
                      <Text style={{color: '#000'}}>478 Meets</Text>
                    </Col>
                    <Col style={{marginLeft: 40}}>
                      <Text style={{color: '#000'}}>25K Views</Text>
                    </Col>
                  </Row>
                </Grid>
              </View>
            </View>
            <View style={{marginTop: 10, padding: 10}}>
              <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>About</Text>
              <Text>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought.</Text>
            </View>
            <View style={{marginTop: 10, padding: 10}}>
              <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>Interest</Text>
              <Text styl={{fontSize: 20}}>Sports</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Reviews</Text>
              {
                reviews.map(item=>{
                  return(
                    <View style={styles.review}>
                      <Image source={require('../../assets/images/user.png')} style={styles.user_image} />
                      <View style={{marginLeft: 20}}>
                        <View style={{width: 20, marginTop: 5, position: 'absolute', top: 0, left: 200}}>
                          <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={4}
                            fullStarColor={'#ffcb00'}
                            starStyle={{
                              fontSize: 10
                            }}
                          />
                        </View>
                        <Text style={{color: '#000', fontSize: 14}}>Noah Willam</Text>
                        <Text numberOfLines={2} style={{width: '50%', fontSize: 10, whiteSpace:'normal'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</Text>
                      </View>
                    </View>
                  )
                })
              }
              <Text style={{textAlign: 'center', color: '#900'}}>Load more</Text>
            </View>
          </View>
          </ScrollView>
          <View style={styles.mem_item}>
            <Image source={require('../../assets/images/user.png')} style={styles.user_image} />
            <View style={{marginLeft: 20}}>
              <Text style={{color: '#000', fontSize: 18}}>Noah Willam</Text>
              <Text style={{fontSize: 14}}>$55/hr</Text>
            </View>
            <Image source={require('../../assets/images/cam.png')} style={styles.cam_image} />
          </View>
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
  mem_item:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 10,

    padding: 10,
    borderRadius: 10
  },
  review:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#707070',
    padding: 10,
    borderRadius: 10
  },
  user_image:{
    width: 40,
    height: 40,
    borderRadius: 50
  },
  rating:{
    color: '#ffcb00',
    fontSize: 10
  },
  cam_image:{
    width: 60,
    height: 40,
    position: 'absolute',
    right: 20
  },
  active_icon:{
    position: 'absolute',
    top: 5,
    right: 3,
    backgroundColor: '#00de56',
    borderRadius: 50
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