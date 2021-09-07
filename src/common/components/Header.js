import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/Colors';
import { Avatar } from 'react-native-paper';
import {
    HOME_ROOT,
    TOPUP_ROOT,
    LOGOUT_ROOT,
    LOGIN_ROOT,
} from '../utils/NavigationRoot';

export const HeaderLeft = ( { navigation, screen } ) => {
    const screens = [HOME_ROOT,
        TOPUP_ROOT,
        LOGOUT_ROOT,
        LOGIN_ROOT,];
    let obj = screens.indexOf( screen );

    return (
        <View style={{ flexDirection: 'row' }}>
            {obj < 0 ? (
                <Icon
                    name="chevron-back"
                    size={40}
                    color={colors.defaultWhite}
                    onPress={() => navigation.goBack()}
                ></Icon>
            ) : null}
            {/* <MaterialCommunityIcons
        name="menu"
        size={40}
        color={screen != 'Home' ? colors.defaultWhite : colors.textblack}
        onPress={() => navigation.openDrawer()}
      ></MaterialCommunityIcons> */}
            <Icon.Button name="ios-menu"
                size={25}
                backgroundColor='#009387'
                onPress={() => navigation.openDrawer()} >

            </Icon.Button>
        </View>
    );
};

export const HeaderRight = ( { screen } ) => {
    return (
        <View style={{ marginRight: 10 }}>
            <Avatar.Image
                source={
                    screen == 'Home'
                        ? {
                            uri: 'https://www.flowglobal.net/content/media/LRM_EXPORT_28953082622816_20191110_115223070.jpeg',
                        }
                        : { uri: 'https://picsum.photos/200/300' }
                }
                size={40}
            />
        </View>
    );
};
