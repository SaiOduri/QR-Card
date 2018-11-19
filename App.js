import React from 'react';

import SplashScreen from "./pages/SplashScreen";
import {createStackNavigator} from "react-navigation";
import MenuScreen from "./pages/MenuScreen";
import Accounts from "./pages/Accounts";
import ScanScreen from "./pages/ScanScreen";

const RootStack = createStackNavigator(
    {
        SplashScreen,
        MenuScreen,
        Accounts,
        ScanScreen,
    }, {
        initialRouteName: 'MenuScreen',
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
