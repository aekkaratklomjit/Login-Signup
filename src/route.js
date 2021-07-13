import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';

import SupportScreen from './screens/SupportScreen'
import SettingsScreen from './screens/SettingsScreen'
import BookmarkScreen from './screens/BookmarkScreen'

const Drawer = createDrawerNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        {/* <Drawer.Screen name="DeatilStack" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default AppNavigator;
