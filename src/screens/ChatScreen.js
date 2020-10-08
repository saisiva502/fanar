import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  I18nManager,
  AsyncStorage
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import NavBarComponent from '../components/NavBar';
import ChatHeaderComponent from '../components/ChatHeader';

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  };

  handleScroll(s){
    console.log(s)
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.welcomeContainer}>
        <ImageBackground source={require('../../assets/images/light.png')} style={styles.image}>
          <ChatHeaderComponent navigation={this.props.navigation} />

          <View style={{position: 'absolute', bottom: 10}}>
            <Text style={{color: '#900', textAlign: 'center', padding: 20}}>You are unable to message this Influencer untill He accept your connection request</Text>

          </View>
          <View style={{width: '100%', display: 'none'}}>
            <NavBarComponent tab="chat" navigation={this.props.navigation}/>
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
    backgroundColor: 'transparent',
  },
  user_image:{
    width: 70,
    height: 70
  },
  rating:{
    color: '#ffcb00',
    fontSize: 10
  },
  cam_image:{
    width: 70,
    height: 40,
    position: 'absolute',
    right: 20
  },
  go_btn:{
    position: 'absolute',
    right: 10,
    backgroundColor: '#fff',
    padding: 5,
    width: 80,
    borderRadius: 40,
    alignItems: 'center'
  },
  mem_item:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
 image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "center",
    width: '100%'
  },
  linearGradient: {
    padding: 5,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    width: '100%',
    borderRadius: 5
  },
  linearGradient_finished: {
    padding: 10,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    width: '100%',
    borderRadius: 50
  },
  formContainer: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    marginTop: 10
  },
  icon:{
    paddingLeft: 10
  },
  formButton: {
    backgroundColor: '#227799',
    opacity: 0.8,
    padding: 15,
    margin: 10
  },
  buttonText: {
    color: '#FFFFFF',
  },
  active_icon:{
    position: 'absolute',
    top: 0,
    right: 0
  }
});