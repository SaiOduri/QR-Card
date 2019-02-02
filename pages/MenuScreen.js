import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  AsyncStorage,
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";

import IconWithTitle from "../components/IconWithTitle";
import styles from "../styles/loginSignup";
import globalStyles from "../styles/global";
import QRCode from "react-native-qrcode";

const {height, width} = Dimensions.get('window');

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
      loading: false
    };
  }

  componentDidMount () {
    this.refresh();
  }

  refresh = () => {
    this.setState({ loading: true });
    this.fetchAccounts();
  };

  fetchAccounts = () => {
    return new Promise((resolve, reject) => {
      this._retrieveData()
        .then( accounts => {
          this.setState(accounts, resolve); 
        })
        .catch(e => {
          reject(e);
        })
        .finally(() => {
          console.log(this.state.tumblr);
          this.setState({ loading: false }); 
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

  render() {
    const url =
      "https://saioduri.github.io/QR-Card/index.html?" +
      (this.state.fb != "" ? "facebook=" + this.state.fb : "") +
      (this.state.insta != "" ? "&instagram=" + this.state.insta : "") +
      (this.state.tumblr != "" ? "&tumblr=" + this.state.tumblr : "") +
      (this.state.github != "" ? "&github=" + this.state.github : "") +
      (this.state.linkedin != "" ? "&linkedin=" + this.state.linkedin : "") +
      (this.state.snapchat != "" ? "&snapchat=" + this.state.snapchat : "");

    const qrCode = !this.state.loading ? (
      <QRCode value={url} size={200} />
    ) : (
      <QRCode value={url} size={200} bgColor="#c6c6c6" />
    );

    return (
      <Swiper loop={false} showsPagination={true} paginationStyle={{bottom:"95%"}} index={1}>
        <View style={[styles.container,]}>
          <View style={[styles.subContainer]}>
            <View style={{flexGrow: 3}}>
            </View>
            <View style={{width:"70%", flexGrow: 2}}>
              {qrCode}
              <Text style={globalStyles.headerMiniText}>
                Scan the qr code and it will show your QRcard profile
              </Text>
            </View>
            <View style= {{flowGrow: 2}}>
              <TouchableOpacity
                style={[globalStyles.menuButton]}
                onPress={() =>
                  this.props.navigation.push("ScanScreen", {
                    onGoBack: () => this.refresh()
                  })
                }
              >
                <Text style={[globalStyles.buttonText]}>
                SCAN QR CODE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
        </View>
      </Swiper>
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
  connectButton: {
    alignSelf: "flex-end",
    justifyContent: "center",
  }
});
