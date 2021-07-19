import React, { useEffect } from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';

import SupportScreen from './screens/SupportScreen'
import SettingsScreen from './screens/SettingsScreen'
import BookmarkScreen from './screens/BookmarkScreen'

import RootStackScreen from './screens/RootStackScreen'
import { ActivityIndicator } from 'react-native-paper';

import { AuthContext } from './components/context';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();
function AppNavigator() {
  // const [isLoading,setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const initiaLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }
  const loginReducer = (prevState,action)=>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return{
          ...prevState,
          userName:action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return{
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return{
          ...prevState,
          userName:action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  }
  const [loginState,dispath] = React.useReducer(loginReducer,initiaLoginState)
  const authContext = React.useMemo(()=>({
    signIn:async(foundUser)=>{
      // setUserToken('Test');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].userName
      try{
          userToken='Token'
          await AsyncStorage.setItem('userToken',userToken)
      }catch(e)
      {console.log(e)}
      dispath({type:'LOGIN',id:userName,token:userToken})
    },
    signOut:async()=>{
      // setUserToken();
      // setIsLoading(false);
      try{
        userToken='Token'
        await AsyncStorage.removeItem('userToken')
      }catch(e){console.log(e)}
      dispath({type:'LOGOUT'})
    },
    signUp:()=>{
      setUserToken();
      setIsLoading(false);
    },
  }),[])

  useEffect(()=>{
    setTimeout(async()=>{
      // setIsLoading(false);
      let userToken;
      userToken=null
      try{
        userToken=await AsyncStorage.getItem('userToken')
      }catch(e){console.log(e)}
      dispath({type:'REGISTER',token:userToken})
    }, 1000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken != null ? (
        <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      )
    :
    <RootStackScreen />
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}



export default AppNavigator;
