import * as React from 'react';
import AppNavigator from './src/route';
import 'react-native-gesture-handler';


export default class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}