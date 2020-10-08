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
import StepIndicator from 'react-native-step-indicator';

export default class MyScheduleScreen extends Component {
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
              <HeaderComponent navigation = {this.props.navigation} title="My Schedule" />
            </View>
            <View style={{marginTop: 22}}>
              <Image source={require('../../assets/images/user.png')} style={{width: 100, height: 100}} />
            </View>
            <ScrollableTabView style={{ marginTop: '3%' }} tabBarActiveTextColor={'#34b4eb'} tabBarTextStyle={{ fontFamily: 'HelveticaNeue-Medium', fontSize: 16}} initialPage={0} backgroundColor={'#fff'}
            tabBarUnderlineStyle={{ backgroundColor: 'transparent' }} activeTextStyle={{ backgroundColor: 'red' }} renderTabBar={() => <ScrollableTabBar style={{borderBottomColor: 'transparent'}} />} onChangeTab={(tab) => {
              this.handleScroll(tab.i)
            }} >
              <ScrollView showsVerticalScrollIndicator={false} tabLabel="Current Meetings" style={{marginBottom: 20, flex: 1}}>
                {
                  users.map(item=>{
                    return(
                      <View style={{width: '100%', paddingTop: 5, marginLeft: 20}}>
                        <Icon name="circle" style={{marginBottom: 5}} size={30} color="#34b4eb" />
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, width: '100%', borderLeftColor: '#d6d6d6', paddingLeft: 30, borderLeftWidth: 1}}>
                          <View>
                            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>OCT 26</Text>
                            <Text style={{color: '#34b4eb', fontWeight: 'bold', fontSize: 16, paddingTop: 5, paddingBottom: 5}}>Jr 7</Text>
                            <Text><Icon name="clock-o" style={{marginLeft: 5, fontWeight: 'normal'}} size={16} color="#000" /> 20:00</Text>
                          </View>
                          <View style={{position: 'absolute', right: 50}}>
                            <TouchableOpacity onPress={() => navigate('HomeScreen')} >
                              <LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}} 
              colors={['#f26060', '#3bb6ff']} style={styles.linearGradient}><Text style={{fontSize: 16, padding: 2, color: '#fff'}}>Attending Today</Text></LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </ScrollView>
              <ScrollView showsVerticalScrollIndicator={false} tabLabel="Previous Meetings" style={{marginBottom: 20, flex: 1, }}>
                {
                  users.map(item=>{
                    return(
                      <View style={{width: '100%', paddingTop: 5, marginLeft: 20}}>
                        <Icon name="circle" style={{marginBottom: 5}} size={30} color="#34b4eb" />
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, width: '100%', borderLeftColor: '#d6d6d6', paddingLeft: 30, borderLeftWidth: 1}}>
                          <View>
                            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>OCT 26</Text>
                            <Text style={{color: '#34b4eb', fontWeight: 'bold', fontSize: 16, paddingTop: 5, paddingBottom: 5}}>Jr 7</Text>
                            <Text><Icon name="clock-o" style={{marginLeft: 5, fontWeight: 'normal'}} size={16} color="#000" /> 20:00</Text>
                          </View>
                          <View style={{position: 'absolute', right: 50}}>
                            <TouchableOpacity onPress={() => navigate('HomeScreen')} >
                              <LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}} 
              colors={['#3bb6ff', '#3bb6ff']} style={styles.linearGradient_finished}><Text style={{fontSize: 16, padding: 2, color: '#fff'}}>Finished</Text></LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </ScrollableTabView>
            <View style={{width: '100%'}}>
              <NavBarComponent tab="calendar" navigation={this.props.navigation}/>
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