import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../../domain/login/LoginScreen';
import HomeScreen from '../../../domain/home/HomeScreen';
import LogoutScreen from '../../../domain/logout/LogoutScreen';
import TopupCategoryScreen from '../../../domain/topup/TopupCategoryScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { HOME_HEAD, LOGIN_HEAD, LOGOUT_HEAD, TOPUP_HEAD } from '../../utils/NavigationHead';
import { HOME_ROOT, LOGIN_ROOT, LOGOUT_ROOT, TOPUP_ROOT } from '../../utils/NavigationRoot';
import { HeaderLeft, HeaderRight } from '../../components/Header';


const Stack = createStackNavigator();

const screenOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',

    }
};

function option ( navigation, head, screen ) {
    return {
        title: head,
        headerTitleStyle: { alignSelf: 'center' },
        headerLeft: () => <HeaderLeft screen={screen} navigation={navigation} />,
        headerRight: () => <HeaderRight screen={screen} />,
    };
}

export const LoginStackScreen = ( { navigation } ) => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={LOGIN_ROOT} component={LoginScreen}
                options={option( navigation, LOGIN_HEAD, LOGIN_ROOT )}
            />
        </Stack.Navigator>
    );
};

export const HomeStackScreen = ( { navigation } ) => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name={HOME_ROOT}
                component={HomeScreen}
                options={option( navigation, HOME_HEAD, HOME_ROOT )}
            />
        </Stack.Navigator>
    );
};

export const LogoutStackScreen = ( { navigation } ) => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name={LOGOUT_ROOT}
                component={LogoutScreen}
                options={option( navigation, LOGOUT_HEAD, LOGOUT_ROOT )}
            />
        </Stack.Navigator>
    );
};

export const TopupStackScreen = ( { navigation } ) => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name={TOPUP_ROOT}
                component={TopupCategoryScreen}
                options={option( navigation, TOPUP_HEAD, TOPUP_ROOT )}
            />
        </Stack.Navigator>
    );
};
