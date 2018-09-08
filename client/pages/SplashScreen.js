import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import LoginSignUpPicker from "./SignInSignUpScreen";

export default class SplashScreen extends React.Component {
    componentWillMount() {
        setTimeout(() => this.props.navigation.replace('SignInSignUpScreen'), 0)
    }

    render() {
        return (
            <ImageBackground source={require('../images/logoblue.png')} style={styles.container}>
                <Image style={localStyles.logo} source={require('../images/logowhite.png')}/>
            </ImageBackground>
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
