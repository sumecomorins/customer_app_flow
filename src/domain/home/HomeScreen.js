import React from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../../common/components/Context'

export default function HomeScreen () {
    const Users = React.useContext(AuthContext);
    console.log(`Usersqqqqq`, Users.userDetail)
    return (
        <View>
            <Text>welcome {Users.userDetail.data.token}HomeScreen</Text>
        </View>
    )
}
