import React from 'react';

import SplashScreen from "./pages/SplashScreen";
import {createStackNavigator} from "react-navigation";
import SignInSignUpScreen from "./pages/SignInSignUpScreen";
import MenuScreen from "./pages/MenuScreen";
import Accounts from "./pages/Accounts";
import ScanScreen from "./pages/ScanScreen";

const RootStack = createStackNavigator(
    {
        SplashScreen,
        SignInSignUpScreen,
        MenuScreen,
        Accounts,
        ScanScreen,
    }, {
        initialRouteName: 'SignInSignUpScreen',
        headerMode: 'none'
    }
);

export default class App extends React.Component {
    render() {
        return (
          <RootStack/>
        )
    }
}
