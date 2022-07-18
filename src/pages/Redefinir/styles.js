import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE9E9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 22,
        color: "#000000",
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#482FF7",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
        color: "#ffffff",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
});

export default styles