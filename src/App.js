import {
  AppRegistry,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import OneSignal from 'react-native-onesignal'; // Import package from node modules
// import { createStackNavigator } from 'react-navigation-stack';

// import config from './config';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WhoAreYouScreen from './screens/WhoAreYouScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import WhatAreYouScreen from './screens/WhatAreYouScreen';
import TeacherSignUpScreen from './screens/TeacherSignUpScreen';
import TeacherHomeScreen from './screens/TeacherHomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OtpScreen from './screens/OtpScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import MyScheduleScreen from './screens/MyScheduleScreen';
import ChatScreen from './screens/ChatScreen';


// import RequestInstallationScreen from './screens/RequestInstallationScreen';
// import HomeScreen from './screens/HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import OurPackagesScreen from './screens/OurPackagesScreen';
// import OurServicesScreen from './screens/OurServicesScreen';
// import RechargeAccountScreen from './screens/RechargeAccountScreen';
// import ContactPageScreen from './screens/ContactPageScreen';
// import ArticlePageScreen from './screens/ArticlePageScreen';
// import OurPartnersScreen from './screens/OurPartnersScreen';
// import FindLocationScreen from './screens/FindLocationScreen';
// import POSScreen from './screens/POSScreen';
// import PartnerMapScreen from './screens/PartnerMapScreen';
// import ServicesScreen from './screens/ServicesScreen';
// import LanguagesScreen from './screens/LanguagesScreen';
// import NotificationsScreen from './screens/NotificationsScreen';
// import WhatsNewScreen from './screens/whatsNewScreen';
// import WhatsNewDetailScreen from './screens/whatsNewDetailScreen';
// import PerformanceScreen from './screens/PerformanceScreen';
//import Ses from './screens/ses';

let getNavOptions = function() {
  return {
    headerTintColor: 'lightgrey',
    headerTitleStyle: {
      fontWeight: "200"
    },
    headerBackTitleStyle: {
      fontWeight: "200"
    },
    headerStyle: {
      backgroundColor: '#0d1c2a',
      borderWidth: 1,
      borderBottomColor: '#999999'
    }
  }
}

const AppNavigator =  createStackNavigator({ 
  Welcome:  WelcomeScreen,
  LoginScreen: LoginScreen,
  SignUpScreen: SignUpScreen,
  WhoAreYouScreen: WhoAreYouScreen,
  HomeScreen: HomeScreen,
  ProfileScreen: ProfileScreen,
  UserProfileScreen: UserProfileScreen,
  WhatAreYouScreen: WhatAreYouScreen,
  TeacherSignUpScreen: TeacherSignUpScreen,
  TeacherHomeScreen: TeacherHomeScreen,
  ForgotPasswordScreen: ForgotPasswordScreen,
  OtpScreen: OtpScreen,
  NewPasswordScreen: NewPasswordScreen,
  MyScheduleScreen: MyScheduleScreen,
  ChatScreen: ChatScreen
},
{
  initialRouteName: 'Welcome',
});

var Routes = createAppContainer(AppNavigator)

export default Routes;
