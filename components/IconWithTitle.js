import React from 'react';
import {Image, Text, View} from "react-native";

import globalStyles from '../styles/global';

export default ({subHeading, containerStyles}) =>
            <View style={containerStyles}>
                <Image style={[styles.logo]} source={require('../images/logowhite.png')}/>
                <Text style={[globalStyles.grayText, styles.subHeading]}>{subHeading}</Text>
            </View>;

const styles = {
    logo: {
        height: 200,
        resizeMode: 'contain'
    },
    subHeading: {
        marginTop: 25,
        fontSize: 23
    }
};