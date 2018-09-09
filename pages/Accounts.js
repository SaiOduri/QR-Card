import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView} from 'react-native';

import IconWithTitle from "../components/IconWithTitle";
import styles from '../styles/loginSignup';
import globalStyles from "../styles/global";
import QRCode from 'react-native-qrcode';

export default class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fb: "",
          insta: "",
          tumblr: "",
          github: "",
          linkedin: "",
          snapchat: "",
          twitter: "",
        };
      }

    onSave = () => {
        _storeData = async () => {
          try {
            await AsyncStorage.setItem('fb', this.state.fb);
            await AsyncStorage.setItem('insta', this.state.insta);
            await AsyncStorage.setItem('tumblr', this.state.tumblr);
            await AsyncStorage.setItem('github', this.state.github);
            await AsyncStorage.setItem('linkedin', this.state.linkedin);
            await AsyncStorage.setItem('snapchat', this.state.snapchat);
            await AsyncStorage.setItem('twitter', this.state.twitter);
          } catch (error) {
            console.log("Couldn't update the internal storage");
          }
        }
        this.props.navgiation.goBack();
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={localStyles.icon} source={require('../images/logoicon.png')}/>
                    <View style={styles.subContainer} >
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Facebook</Text>
                        <TextInput placeholder="Enter your Facebook" onChangeText={(fb) => this.setState({fb})}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Instagram</Text>
                        <TextInput placeholder="Enter your Instagram" onChangeText={(insta) => this.setState({insta})}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Tumblr</Text>
                        <TextInput placeholder="Enter your Tumblr" onChangeText={(tumblr) => this.setState({tumblr})}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Github</Text>
                        <TextInput placeholder="Enter your Github" onChangeText={(github) => this.setState({github})}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>LinkedIn</Text>
                        <TextInput placeholder="Enter your LinkedIn" onChangeText={(linkedin) => this.setState({linkedin})}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Snapchat</Text>
                        <TextInput placeholder="Enter your Snapchat" onChangeText={(snapchat) => this.setState({snapchat})}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Twitter</Text>
                        <TextInput placeholder="Enter your Twitter" onChangeText={(twitter) => this.setState({twitter})}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onSave()} style={[globalStyles.button, styles.signInButton, localStyles.signUpButton]}>
                        <Text style={[styles.signInButtonText, globalStyles.buttonText, localStyles.signInText]}>Save</Text>
                    </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
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
