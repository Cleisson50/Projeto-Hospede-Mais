import React, { useState, useEffect, useId, AsyncStorage } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { collection, getDocs } from "firebase/firestore";

export default function Task({ navigation, route }) {
    const [users, setUsers] = useState([]);
    const database = firebase.firestore()

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    // useEffect(() => {
    //     const user = firebase.auth().currentUser;
    //     if (user) {
    //         database.collection("users").get().then((querySnapshot) => {
    //             const list = []
    //             querySnapshot.forEach((doc) => {
    //                 list.push({key: doc.id, ...doc.data()});
    //             });
    //             setUsers(list)
    //         });
    //     } else {
    //         console.log("erro")
    //     }
    // }, [])

    return (
        <View style={styles.container}>
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                data={users}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            /> */}
            <TouchableOpacity style={styles.buttonLogout} onPress={() => { logout() }}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}