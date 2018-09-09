import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, AsyncStorage} from 'react-native';

import IconWithTitle from "../components/IconWithTitle";
import styles from '../styles/loginSignup';
import globalStyles from "../styles/global";
import QRCode from 'react-native-qrcode';

export default class MenuScreen extends React.Component {
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
  componentDidMount() {
    _retrieveData = async () => {
      try {
        const fb = await AsyncStorage.getItem('fb');
        const insta = await AsyncStorage.getItem('insta');
        const tumblr = await AsyncStorage.getItem('tumblr');
        const github = await AsyncStorage.getItem('github');
        const linkedin = await AsyncStorage.getItem('linkedin');
        const snapchat = await AsyncStorage.getItem('snapchat');
        const twitter = await AsyncStorage.getItem('twitter');

        this.setState({fb, insta, tumblr, github, linkedin, snapchat, twitter});
       } catch (error) {
         console.log("didn't upload properly: " + error);
       }
    }
  }

  render() {
    const url="https://saioduri.github.io/SocialConnect/index.html?" +
                ((this.state.fb != "") ? ("facebook=" + this.state.fb) : "") +
                ((this.state.insta != "") ? ("&instagram=" + this.state.insta) : "") +
                ((this.state.tumblr != "") ? ("&tumblr=" + this.state.tumblr) : "") +
                ((this.state.github != "") ? ("&github=" + this.state.github) : "") +
                ((this.state.linkedin != "") ? ("&linkedin=" + this.state.linkedin) : "") +
                ((this.state.snapchat != "") ? ("&snapchat=" + this.state.snapchat) : "");
    return (
      <View style={styles.container}>
        <Image style={localStyles.icon} source={require('../images/logoicon.png')}/>
        <View style={styles.subContainer} >
          <View style={localStyles.qr}>
            <QRCode
              value={url}
              size={200}
            />
          </View>
          <TouchableOpacity style={[globalStyles.button, styles.signInButton]} 
            onPress={() => this.props.navigation.push('Accounts')}>
              <Text style={[styles.signInButtonText, globalStyles.buttonText]}>CONNECT ACCOUNTS</Text>
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
