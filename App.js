import 'react-native-gesture-handler';
import React from 'react'
import { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackScreen, LoginStackScreen, LogoutStackScreen, TopupStackScreen } from './src/common/navigation/stack/RootStackScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainTabScreen from './src/common/navigation/tab/MainTabScreen';
import TopupCategoryScreen from './src/domain/topup/TopupCategoryScreen';
import { DrawerContent } from './src/common/navigation/drawer/DrawerContent';
import LoginScreen from './src/domain/login/LoginScreen';
import LogoutScreen from './src/domain/logout/LogoutScreen';
import TestLogin from './src/domain/login/TestLogin';
import { AuthContext } from './src/common/components/Context';


const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {

  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState([]);
  console.log(`userDetailssss`, userDetail)
  const user = {userDetail, setUserDetail,userToken,setUserToken};

  
  return (
    <AuthContext.Provider value = {user}>
     {/* <AuthContext.Provider value={authContext}> */}


    <NavigationContainer>
    { userToken !== null ?(
     <Drawer.Navigator   drawerContent={props => <DrawerContent {...props} />} >
         <Drawer.Screen  options={{headerShown:false}}  name='sss'  component={MainTabScreen} />
    </Drawer.Navigator> 
    )
    :
    <TestLogin />
  }

  </NavigationContainer>
   </AuthContext.Provider>
    
  )
}
