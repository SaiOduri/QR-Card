import React from 'react';

import SplashScreen from "./pages/SplashScreen";
import {createStackNavigator} from "react-navigation";
import MenuScreen from "./pages/MenuScreen";
import Accounts from "./pages/Accounts";

const RootStack = createStackNavigator(
    {
        SplashScreen,
        MenuScreen,
        Accounts,
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
