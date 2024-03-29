import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../common/components/Context'
import axios from 'axios';



export default function TestLogin({navigation}) {

    // const Users = [
    //     {
    //         id: 1, 
    //         email: 'user1@email.com',
    //         username: 'user1', 
    //         password: 'password', 
    //         userToken: 'token123'
    //     },
    //     {
    //         id: 2, 
    //         email: 'user2@email.com',
    //         username: 'user2', 
    //         password: 'pass1234', 
    //         userToken: 'token12345'
    //     },
    //     {
    //         id: 3, 
    //         email: 'testuser@email.com',
    //         username: 'testuser', 
    //         password: 'testpass', 
    //         userToken: 'testtoken'
    //     },
    // ];

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    // const { colors } = useTheme();

    // const { signIn } = React.useContext(AuthContext);
    const User = React.useContext(AuthContext);
    // console.log(`userDetail`, User)

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    // const loginHandle = (userName, pass) => {

        // if (data.username.length == 0 || data.password.length == 0) {
        //     Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        //         { text: 'Okay' }
        //     ]);
        //     return;
        // }
        // if (Users.name == userName && Users.password == pass){
        //     // alert('sucess')
        //     Users.setUserToken('fgh')
        //     console.log(`UsersAut`, Users)
        // }else{
        //     alert('failed')
        // }
    // }


 const loginHandle = async (userName, pass) => {
    let loginData = {
        phone: userName,
        password: pass,
      };
      if (data.username.length == 0 || data.password.length == 0) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            { text: 'Okay' }
        ]);
        return;
    }
  try {
    const response = await axios.post('https://veltech.edu.in/admission_enquiry_2019/cms/edit_data.php?actionVal=login', loginData);
    console.log(`response`, response.data)
    if (response.status == '200') {
      
    //   signIn(response.data) 
    User.setUserToken(response.data.token)
    User.setUserDetail(response)

      
    } else {
      return {
        // error: 'Other Errors',
        
      };
    }
  } catch (error) {
    if (error.response.status == '404') {
      return {
        // error: 'File Not Found',
      };
    }
  }
};
    // const loginHandle = (userName, password) => {

    //     const foundUser = Users.filter( item => {
    //         return userName == item.username && password == item.password;
    //     } );

    //     if ( data.username.length == 0 || data.password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    //     signIn(foundUser);
    // }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View
                style={[styles.footer, {
                    // backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    // color: colors.text
                }]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        // color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            // color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </View>
                }


                <Text style={[styles.text_footer, {
                    // color: colors.text,
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        // color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            // color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </View>
                }


                <TouchableOpacity>
                    <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                    >
                        {/* <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        > */}
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        {/* </LinearGradient> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>loginHandle(data.username,data.password)  }
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
