import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import IconWithTitle from "../components/IconWithTitle";
import styles from '../styles/loginSignup';
import globalStyles from "../styles/global";
import QRCode from 'react-native-qrcode';

export default class Accounts extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Image style={localStyles.icon} source={require('../images/logoicon.png')}/>
                <View style={styles.subContainer} >
                <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]} onPress={() => this.props.navigation.push('LoginDashboard')}>
                    <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]} onPress={() => this.props.navigation.push('LoginDashboard')}>
                    <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]} onPress={() => this.props.navigation.push('LoginDashboard')}>
                    <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>SnapChat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]} onPress={() => this.props.navigation.push('LoginDashboard')}>
                    <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Twitter</Text>
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
    },
    qr:{
        marginTop: 10,
    },
    icon:{
        height: 100,
        width: 100,
        marginTop: 50,
    }
});
