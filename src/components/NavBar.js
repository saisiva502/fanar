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
import LinearGradient from 'react-native-linear-gradient';



export default class NavBarComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			home: true,
			chat: false,
			calendar: false
		}

		this.onChatPress = this.onChatPress.bind(this)
	}

	componentWillMount(){
		const tab = this.props.tab;
		if(tab == "home"){
			this.setState({
				calendar: false,
				home: true,
				chat: false
			})
		}
		if(tab == "calendar"){
			this.setState({
				calendar: true,
				home: false,
				chat: false
			})
		}
		if(tab == "chat"){
			this.setState({
				calendar: false,
				home: false,
				chat: true
			})
		}
	}
	onChatPress(){
		this.setState({
			calendar: false,
			home: false,
			chat: true
		})
		this.props.navigation.navigate('ChatScreen')
	}

	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={styles.nav}>
				<LinearGradient start={{x: 0.0, y: 0.7}} end={{x: 0.8, y: 1.0}} 
	colors={['#3bb6ff', '#f5adad']} style={styles.linearGradient}>
          <TouchableOpacity onPress={() => navigate('MyScheduleScreen')} style={this.state.calendar ? styles.active_calendar : styles.nav_cal_item}>
          	<Image style={{height: 30, width: 30}} source={this.state.calendar ? require('../../assets/images/calendar_act.png') : require('../../assets/images/calendar.png') } />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('HomeScreen')} style={this.state.home ? styles.active_home : styles.nav_item}>
          	<Image source={this.state.home ? require('../../assets/images/home_act.png') : require('../../assets/images/home.png')} style={{height: 30, width: 30}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('ChatScreen')} style={this.state.chat ? styles.active_chat : styles.nav_chat_item}>
          	<Image style={{height: 35, width: 35}} source={this.state.chat ? require('../../assets/images/chat_act.png') : require('../../assets/images/chat.png')}  />
          </TouchableOpacity>
				</LinearGradient>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	nav:{
		paddingLeft: 10,
		paddingRight: 10,
		width: '100%',
		// height: 50
	},

	nav_item:{
		height: 30, 
		width: 30
	},

	nav_cal_item: {
		height: 30, 
		width: 30,
		position: 'absolute',
		left: 50
	},
	nav_chat_item: {
		height: 30, 
		width: 30,
		position: 'absolute',
		right: 50
	},
	active_home:{
		position: 'absolute',
		bottom: 10,
		backgroundColor: '#fff',
		height: 50,
		width: 50,
		borderRadius: 50,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	active_calendar:{
		position: 'absolute',
		bottom: 10,
		left: 50,
		backgroundColor: '#fff',
		height: 50,
		width: 50,
		borderRadius: 50,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	active_chat:{
		position: 'absolute',
		bottom: 10,
		right: 50,
		backgroundColor: '#fff',
		height: 50,
		width: 50,
		borderRadius: 50,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	linearGradient: {
    padding: 5,
		height: 50,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5
  }
})