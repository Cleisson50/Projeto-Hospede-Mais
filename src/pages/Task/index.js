import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { collection, getDocs } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task({ navigation, route }) {
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const database = firebase.firestore()

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    function Users() {
        useEffect(() => {
            const subscriber = firestore()
                .collection('Users')
                .onSnapshot(querySnapshot => {
                    const users = [];

                    querySnapshot.forEach(documentSnapshot => {
                        users.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
                    });

                    setUsers(users);
                    setLoading(true);
                });

            // Unsubscribe from events when no longer in use
            return () => subscriber();
        }, []);

        if (loading) {
            return <ActivityIndicator />;
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>User Email: {item.email}</Text>
                        <Text>User Name: {item.name}</Text>
                        <Text>User Telefone: {item.telefone}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.buttonLogout} onPress={() => { logout() }}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}