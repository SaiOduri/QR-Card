import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    button: {
        height: 60,
        width: '100%',
        marginRight: 100,
        marginLeft: 100,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 3,
        borderWidth: 0,
        borderColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 1
    },
    buttonText: {
        marginTop: 0,
        fontSize: 15,
        textAlignVertical: "center",
        color: "#fff"
    },
    grayText: {
        fontSize: 20,
        textAlign: "center",
        color: "#4B4B4B"
    }
});