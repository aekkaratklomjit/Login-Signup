//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {Icon} from 'react-native-elements';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { AuthContext } from '../components/context';

// create a component
export function DrawerContent(props) {
    const {signOut} = React.useContext(AuthContext);
    const [isDarkTheme,setIsDarkTheme] = React.useState(false);
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)
    }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://scontent.fkkc1-1.fna.fbcdn.net/v/t1.6435-9/40613852_10205035965695481_6327953635648995328_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HCeWy4gCMEcAX90RcIA&_nc_ht=scontent.fkkc1-1.fna&oh=7d22242131b59e866d147e4d00a2a88f&oe=60F208A0',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Aekkarat Klomjit</Title>
                <Caption style={styles.caption}>@Saamauey</Caption>
              </View>
            </View>

                <View style={styles.row}>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                    </View>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                        <Caption style={styles.caption}>Followers</Caption>
                    </View>
                </View>
          </View>

          <Drawer.Section styles={styles.bottomDrawerSection}>
          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('HomeScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user"
                                type="font-awesome" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="address-book" 
                                type="font-awesome" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

//make this component available to the app
