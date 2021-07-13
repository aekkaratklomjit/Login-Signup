import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Icon} from 'react-native-elements';

import Home from './screens/Home';
import Detail from './screens/Detail';

const Drawer = createDrawerNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="DeatilStack" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon
              raised
              name="plus-square"
              type="font-awesome"
              color="#f50"
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
          backgroundColor: '#5fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <DeatilStack.Screen name="DetailScreen" component={Detail} />
    </DeatilStack.Navigator>
  );
}

export default AppNavigator;
