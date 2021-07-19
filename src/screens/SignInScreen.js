//import liraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../components/context';

// create a component
const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const {signIn} = React.useContext(AuthContext)
  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };
  const textPasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (username,password) =>{
    signIn(username,password)
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Wellcome !!</Text>
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Icon name="user-o" color="black" type="font-awesome" size={20} />
          <TextInput
            placeholder="Please input your Email."
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Icon
                name="check-circle"
                color="green"
                type="Feather"
                size={20}
              />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
        <View style={styles.action}>
          <Icon name="lock" color="black" type="font-awesome" size={20} />
          <TextInput
            placeholder="Please input your Email."
            style={[styles.textInput]}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={val => textPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Icon
                name="eye-slash"
                color="green"
                type="font-awesome"
                size={20}
              />
            ) : (
              <Icon name="eye" color="green" type="font-awesome" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle(data.username,data.password)}}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text
              style={[styles.textSign,{color:'#fff'}]}>
              Sign In
            </Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>navigation.navigate('SignUpScreen')}
              style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
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
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default SignInScreen;
