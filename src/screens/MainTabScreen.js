import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Icon} from 'react-native-elements';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen(){
    return(
  <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    barStyle={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#E07A5F',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Detail"
      component={DetailStackScreen}
      options={{
        tabBarLabel: 'Detail',
        tabBarColor: '#3D405B',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
        <Tab.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'ExploreScreen',
        tabBarColor: '#81B29A',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
        <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'ProfileScreen',
        tabBarColor: '#F2CC8F',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="circle-slice-6" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
    )
};

export default MainTabScreen;

const HomeStack = createStackNavigator();
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E07A5F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon
              raised
              name="home"
              type="font-awesome"
              color="#E07A5F"
              size={20}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const DeatilStack = createStackNavigator();
function DetailStackScreen() {
  return (
    <DeatilStack.Navigator
      initialRouteName="DetailScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3D405B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <DeatilStack.Screen name="DetailScreen" component={DetailScreen} />
    </DeatilStack.Navigator>
  );
}
