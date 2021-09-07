import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStackScreen, LoginStackScreen, LogoutStackScreen, TopupStackScreen } from '../stack/RootStackScreen';
import { HOME_ROOT, LOGIN_ROOT, LOGOUT_ROOT, TOPUP_ROOT } from '../../utils/NavigationRoot';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName={HOME_ROOT}
        activeColor="#fff"
        barStyle={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Homes"
            component={HomeStackScreen}
            options={{
                tabBarLabel: HOME_ROOT,
                tabBarColor: '#009387',
                tabBarIcon: ( { color } ) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Logins"
            component={LoginStackScreen}
            options={{
                tabBarLabel: LOGIN_ROOT,
                tabBarColor: '#1f65ff',
                tabBarIcon: ( { color } ) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Logouts"
            component={LogoutStackScreen}
            options={{
                tabBarLabel: LOGOUT_ROOT,
                tabBarColor: '#694fad',
                tabBarIcon: ( { color } ) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Topups"
            component={TopupStackScreen}
            options={{
                tabBarLabel: TOPUP_ROOT,
                tabBarColor: '#d02860',
                tabBarIcon: ( { color } ) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;