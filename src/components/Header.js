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



export default class HeaderComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			home: true,
			chat: false,
			calendar: false
		}
	}
	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={styles.header}>
				<TouchableOpacity onPress={()=> navigate('HomeScreen')} style={{position: 'absolute', left: 20}}>
	        <Icon style={styles.icon} name="long-arrow-left" size={30} color="#4fb2f7" />
				</TouchableOpacity>
				<Text style={{fontWeight: 'bold', color: '#4fb2f7', fontSize: 18}}>{this.props.title}</Text>
				<TouchableOpacity style={{position: 'absolute', right: 20}}>
				{this.props.user ?
					<View style={{flexDirection:'row', alignItems: 'center'}}>
						<Icon  name="heart-o" size={22} color="#4fb2f7" />
						<Icon style={{marginLeft: 10}} name="ellipsis-h" size={25} color="#4fb2f7" />
					</View>
					:
	        		<Text style={{fontWeight: 'bold', color: '#4fb2f7', fontSize: 18}}>Logout</Text>
				}
				</TouchableOpacity>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
})