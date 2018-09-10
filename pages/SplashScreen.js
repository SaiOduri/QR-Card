import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';

export default class SplashScreen extends React.Component {
    componentWillMount() {
        setTimeout(() => this.props.navigation.replace('LandingScreen'), 0)
    }

    render() {
        return (
            <Image style={localStyles.logo} source={require('../images/logowhite.png')}/>
        );
    }
}

const localStyles = StyleSheet.create({
    logo: {
        height: 200,
        resizeMode: 'contain'
    },
    container: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
});
