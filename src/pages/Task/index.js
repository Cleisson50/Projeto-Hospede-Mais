import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { collection, getDocs } from "firebase/firestore";

export default function Task({ navigation, route }) {
    const [email, setEmail] = useState("");
    const database = firebase.firestore()

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    function usuario() {
        const user = firebase.auth().currentUser;

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // ...
            console.log(user);
        } else {
            // No user is signed in.
        }
    }

    return (
        <View style={styles.container}>
            <View>
                { usuario }
            </View>
            <TouchableOpacity style={styles.buttonLogout} onPress={() => { logout() }}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}