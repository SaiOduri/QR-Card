import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    }, subContainer: {
        width: "80%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }, signInButton: {
        backgroundColor: "#F20951",
        justifyContent: "center"
    }, signInButtonText: {
        fontWeight: "bold"
    }, orText: {
        marginTop: 20,
        marginBottom: 20
    }, textInput: {
        width: '100%',
        paddingBottom: 12,
        color: "#4B4B4B",
        fontSize: 20,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
        textDecorationLine: "none"
    }, passwordInput: {
        marginTop: 40,
        marginBottom: 20
    }
});