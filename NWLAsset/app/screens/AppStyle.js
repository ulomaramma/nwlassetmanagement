import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import colors from "../Config/colors";

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        paddingBottom: 20, // smaller padding below screen
        backgroundColor: colors.white,
        justifyContent: 'space-between',
    },
    siteImgContainer: {
        width: Dimensions.get('window').width * 0.9,
        padding: 10,
        marginTop: 40,
        height: Dimensions.get('window').height * 0.25,
        justifyContent: 'center', // center vertically
        alignItems: 'center', // center horizontally
        borderRadius: 15,
    },
    imgContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.2,
        justifyContent: 'center', // center vertically
        alignItems: 'center', // center horizontally
        borderRadius: 15,
        marginTop: 20, // no margin between images
        marginBottom: 30, // no space between last image and screen bottom
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', // scale image to fit within container without distorting aspect ratio
        borderRadius: 40,
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
    },
})

export default AppStyle;
