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
    this.fetchAccounts();
  }

  fetchAccounts = () => {
    return new Promise((resolve, reject) => {
      this._retrieveData()
        .then(accounts => {
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

      return { fb, insta, tumblr, github, linkedin, snapchat, twitter };
    } catch (error) {
      console.log("didn't upload properly: " + error);
    }
  };

  onSave = () => {
    this._storeData();
    this.props.navigation.state.params.onGoBack();
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
            style={globalStyles.displayPicture}
            source={require("../images/user.png")}
          />
          <Text
            style={[globalStyles.nameHeaderText]}
          >
          Tony Zeng
          </Text>

          <Text
          style={[globalStyles.headerMiniText]}
          >
          Long Live @SocialConnect
          </Text>
          <View style={globalStyles.subContainer}>
            <TouchableOpacity
              style={[
                globalStyles.button
              ]}
            >
              <Image
                style={globalStyles.miniIcon}
                source={require("../images/Facebook.png")}            
              />
              <TextInput
                style={[globalStyles.buttonNewText]}
                placeholder="touch to edit"
                placeholderTextColor={'#DBDBDB'}
                value={this.state.fb}
                onChangeText={fb => this.setState({ fb })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button
              ]}
            >
               <Image
                style={globalStyles.miniIcon}
                source={require("../images/Instagram.png")}            
              />
              <TextInput
                style={[globalStyles.buttonNewText]}
                placeholder="touch to edit"
                placeholderTextColor={'#DBDBDB'}
                value={this.state.insta}
                onChangeText={insta => this.setState({ insta })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button
              ]}
            >
              <Image
                style={globalStyles.miniIcon}
                source={require("../images/GitHub.png")}            
              />
              <TextInput
                style={[globalStyles.buttonNewText]}
                placeholder="touch to edit"
                placeholderTextColor={'#DBDBDB'}
                value={this.state.github}
                onChangeText={github => this.setState({ github })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button
              ]}
            >
              <Image
                style={globalStyles.miniIcon}
                source={require("../images/LinkedIn.png")}            
              />
              <TextInput
                style={[globalStyles.buttonNewText]}
                placeholder="touch to edit"
                placeholderTextColor={'#DBDBDB'}
                value={this.state.linkedin}
                onChangeText={linkedin => this.setState({ linkedin })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button
              ]}
            >
              <Image
                style={globalStyles.miniIcon}
                source={require("../images/Snapchat.png")}            
              />
              <TextInput
                style={[globalStyles.buttonNewText]}
                placeholder="touch to edit"
                placeholderTextColor={'#DBDBDB'}
                value={this.state.snapchat}
                onChangeText={snapchat => this.setState({ snapchat })}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.button
              ]}
            >
              <Image
                style={globalStyles.miniIcon}
                source={require("../images/Twitter.png")}            
              />
              <TextInput
                style={[globalStyles.buttonNewText]}
                placeholder="touch to edit"
                placeholderTextColor={'#DBDBDB'}
                value={this.state.twitter}
                onChangeText={twitter => this.setState({ twitter })}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onSave()}
              style={[
                globalStyles.updateButton, 
                { marginBottom: 20 }
              ]}
            >
              <Text
                style={[
                  globalStyles.buttonUpdateText
                ]}
              >
                Update
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
