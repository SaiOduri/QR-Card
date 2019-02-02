import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    button: {
        height: 60,
        width: '100%',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
    },
    menuButton:{
        height: 60,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "column",
    },
    updateButton: {
        height: 45,
        width: 170,
        marginTop:20,
        backgroundColor: "#00008B",
    },
    nameHeaderText: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color:"#000000",
        marginTop:20,
        marginBottom:5,
    },
    headerMiniText: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 16,
        color:"#686868",
    },
    displayPicture: {
        marginTop: 60,
        height: 100,
        width: 100,
    },
    buttonText: {
        marginTop: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        textAlignVertical: "center",
        color: "#000000",
        fontFamily: "Segoe UI",
    },
    buttonUpdateText: {
        fontSize: 15,
        marginTop:10,
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold",
        flex:1,
    },
    buttonNewText: {
        paddingTop: 10,
        paddingBottom: 15,
        fontSize: 14,
        textAlign: "right",
        flex: 1,
        color: "#686868"
    },
    miniIcon: {
        height: 30,
        width: 30,
        
    },
    grayText: {
        fontSize: 20,
        textAlign: "center",
        color: "#4B4B4B"
    },
    container: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      },
    subContainer: {
        marginTop: 80,
        width: "80%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
    subContainer2: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
    signInButton: {
        justifyContent: "center"
      },
    orText: {
        marginTop: 20,
        marginBottom: 20
      },
    passwordInput: {
        marginTop: 40,
        marginBottom: 20
      },
    qr: {
        position:"absolute",
      }
    
});