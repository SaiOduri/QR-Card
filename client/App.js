import React from 'react';

import SplashScreen from "./pages/SplashScreen";
import {createStackNavigator} from "react-navigation";
import SignInSignUpScreen from "./pages/SignInSignUpScreen";

const RootStack = createStackNavigator(
    {
        SplashScreen,
        SignInSignUpScreen,
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
