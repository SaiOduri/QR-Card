import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  AsyncStorage
} from "react-native";

import IconWithTitle from "../components/IconWithTitle";
import styles from "../styles/loginSignup";
import globalStyles from "../styles/global";
import QRCode from "react-native-qrcode";

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
      twitter: ""
    };
  }

  componentDidMount() {
    this.fetchAccounts();
  }

  fetchAccounts = () => {
    return new Promise((resolve, reject) => {
      this._retrieveData()
        .then((accounts) => {
          this.setState(accounts, resolve);
        })
        .catch(e => {
          reject(e);
        });
    });
  };

  _retrieveData = async () => {
    try {
      const fb = (await AsyncStorage.getItem("fb")) || "";
      const insta = (await AsyncStorage.getItem("insta")) || "";
      const tumblr = (await AsyncStorage.getItem("tumblr")) || "";
      const github = (await AsyncStorage.getItem("github")) || "";
      const linkedin = (await AsyncStorage.getItem("linkedin")) || "";
      const snapchat = (await AsyncStorage.getItem("snapchat")) || "";
      const twitter = (await AsyncStorage.getItem("twitter")) || "";
      console.log(insta);

      return { fb, insta, tumblr, github, linkedin, snapchat, twitter };
    } catch (error) {
      console.log("didn't upload properly: " + error);
    }
  };

  onSave = () => {
    this._storeData();
    this.props.navigation.goBack();
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("fb", this.state.fb);
      await AsyncStorage.setItem("insta", this.state.insta);
      await AsyncStorage.setItem("tumblr", this.state.tumblr);
      await AsyncStorage.setItem("github", this.state.github);
      await AsyncStorage.setItem("linkedin", this.state.linkedin);
      await AsyncStorage.setItem("snapchat", this.state.snapchat);
      await AsyncStorage.setItem("twitter", this.state.twitter);
    } catch (error) {
      console.log("Couldn't update the internal storage: " + error);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={localStyles.icon}
            source={require("../images/logoicon.png")}
          />
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Facebook
              </Text>
              <TextInput
                placeholder="Enter your Facebook"
                value={this.state.fb}
                onChangeText={fb => this.setState({ fb })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Instagram
              </Text>
              <TextInput
                placeholder="Enter your Instagram"
                value={this.state.insta}
                onChangeText={insta => this.setState({ insta })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Tumblr
              </Text>
              <TextInput
                placeholder="Enter your Tumblr"
                value={this.state.tumblr}
                onChangeText={tumblr => this.setState({ tumblr })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Github
              </Text>
              <TextInput
                placeholder="Enter your Github"
                value={this.state.github}
                onChangeText={github => this.setState({ github })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                LinkedIn
              </Text>
              <TextInput
                placeholder="Enter your LinkedIn"
                value={this.state.linkedin}
                onChangeText={linkedin => this.setState({ linkedin })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Snapchat
              </Text>
              <TextInput
                placeholder="Enter your Snapchat"
                value={this.state.snapchat}
                onChangeText={snapchat => this.setState({ snapchat })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Twitter
              </Text>
              <TextInput
                placeholder="Enter your Twitter"
                value={this.state.twitter}
                onChangeText={twitter => this.setState({ twitter })}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onSave()}
              style={[
                globalStyles.button,
                styles.signInButton,
                localStyles.signUpButton
              ]}
            >
              <Text
                style={[
                  styles.signInButtonText,
                  globalStyles.buttonText,
                  localStyles.signInText
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const localStyles = StyleSheet.create({
  signUpButton: {
    backgroundColor: "white"
  },
  signInText: {
    color: "#F20951"
  },
  qr: {
    marginTop: 10
  },
  icon: {
    height: 100,
    width: 100,
    marginTop: 50
  }
});
