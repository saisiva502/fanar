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
// import { NavigationActions } from 'react-navigation'
import { StackActions, NavigationActions } from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import NavBarComponent from '../components/NavBar';
import HeaderComponent from '../components/Header';

export default class TeacherHomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillUnmount() {
    //StatusBar.setHidden(false);
    // this.timeouts.forEach(clearTimeout);
  }

  handleScroll(s){
    console.log(s)
  }


  render() {
    const users = ['user1', 'user1', 'user1', 'user1', 'user1', 'user1', 'user1']
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.welcomeContainer}>
        <ImageBackground source={require('../../assets/images/light.png')} style={styles.image}>
            <View style={{width: '100%', padding: 20}}>
              <HeaderComponent navigation = {this.props.navigation} title="Favourites" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: '90%' }}>
              {
                users.map(item=>{
                  return(
                    <TouchableOpacity onPress={() => navigate('UserProfileScreen')}>
                      <View style={styles.mem_item}>
                        <View>
                          <Image source={require('../../assets/images/user.png')} style={styles.user_image} />
                          <Icon style={styles.active_icon} name="circle" size={10} color="#00de56" />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={{color: '#000', fontSize: 18}}>Noah Willam</Text>
                          <Text style={{fontSize: 14}}>Influencer</Text>
                          <View style={{width: 30, marginTop: 5}}>
                            <StarRating
                              disabled={false}
                              maxStars={5}
                              rating={4}
                              fullStarColor={'#ffcb00'}
                              starStyle={{
                                fontSize: 15
                              }}
                            />
                          </View>
                        </View>
                        <Image source={require('../../assets/images/cam.png')} style={styles.cam_image} />
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
            <View style={{width: '100%'}}>
              <NavBarComponent />
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