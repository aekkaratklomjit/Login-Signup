import React, { Component } from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <Button
                    onPress={()=>this.props.navigation.navigate('DeatilStack')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}
export default Home

const styles = StyleSheet.create({})
