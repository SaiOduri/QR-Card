import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import IconWithTitle from "../components/IconWithTitle";
import styles from '../styles/loginSignup';
import globalStyles from "../styles/global";

export default class SignInSignUpScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer} >
                    <IconWithTitle subHeading={"Connect With Friends Quicker!"} containerStyles={{marginBottom: 90}}/>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton]} onPress={() => this.props.navigation.push('MenuScreen')}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText]}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]} onPress={() => this.props.navigation.push('LoginDashboard')}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const localStyles = StyleSheet.create({
    signUpButton: {
        backgroundColor: 'white'
    }, signInText: {
        color: "#F20951",
    }
});
