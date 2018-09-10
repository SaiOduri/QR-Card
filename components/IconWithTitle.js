import React from 'react';
import {Image, Text, View, Dimensions} from "react-native";

import globalStyles from '../styles/global';

const {height, width} = Dimensions.get('window');

export default ({subHeading, containerStyles}) =>
            <View style={containerStyles}>
                <Image style={[styles.logo]} source={require('../images/logowhite.png')}/>
                <Text style={[globalStyles.grayText, styles.subHeading]}>{subHeading}</Text>
            </View>;

const styles = {
    logo: {
        width: width,
        height: height/4,
        resizeMode: 'contain'
    },
    subHeading: {
        marginTop: 25,
        fontSize: 23
    }
};