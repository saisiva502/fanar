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
import Icon from 'react-native-vector-icons/FontAwesome';



export default class ChatHeaderComponent extends React.Component {
	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={styles.header}>
				<TouchableOpacity onPress={()=> navigate('HomeScreen')} style={{position: 'absolute', left: 20}}>
	        <Icon style={styles.icon} name="long-arrow-left" size={30} color="#4fb2f7" />
				</TouchableOpacity>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View>
            <Image source={require('../../assets/images/user.png')} style={{height: 40, width: 40, borderRadius: 50}} />
            <Icon style={styles.active_icon} name="circle" size={10} color="#00de56" />
          </View>
          <Text style={{marginLeft: 10}}>JR7</Text>
				</View>
				<View style={{position: 'absolute', right: 20}}>
					<View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/images/call.png')} style={{height: 40, width: 40, borderRadius: 50}} />
            <View style={{marginLeft: 10, alignItems: 'center', justifyContent:'center'}}>
            	<Image source={require('../../assets/images/video_call.png')} style={{height: 40, width: 40, borderRadius: 50}} />
            	<Image source={require('../../assets/images/video_cam.png')} style={{height: 15, width: 25, position: 'absolute' }} />
            </View>
					</View>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	header: {
		width: '100%',
		position: 'absolute',
		top: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	active_icon: {
		position: 'absolute',
		top: 0,
		right: 0
	}
})