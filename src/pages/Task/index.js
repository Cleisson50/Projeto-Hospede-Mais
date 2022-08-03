import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { collection, getDocs } from "firebase/firestore";
import Paho from "paho-mqtt"

export default function Task({ navigation, route }) {
    const database = firebase.firestore();
    var clientID = "ID-" + Math.round(Math.random() * 1000);
    const client = new Paho.Client(
        // 'broker.emqx.io',
        // 8083,
        '10.44.1.35',
        9001,
        '/',
        clientID
    )

    const user = firebase.auth().currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const uid = user.uid;
    }

    client.connect({
        onSuccess: function () {
            console.log("connected")
            console.log(clientID)
            // client.subscribe("esp32/output")
            // client.subscribe("esp32/distance")
            client.subscribe(user.photoURL); // As linhas a seguir sao uma tentativa de envio de mensagem
        },
        onFailure: function () {
            console.log("Desconectado")
        },
        // userName: 'emqx',
        // password: 'public',
        // useSSL: true,
    })

    function ligar() {
        const message1 = new Paho.Message("on"); // AGORA funcionando
        message1.destinationName = user.photoURL; // para testar

        client.send(message1); // abrir o broker online
    }

    function desligar() {
        const message1 = new Paho.Message("off"); // AGORA funcionando
        message1.destinationName = user.photoURL; // para testar

        client.send(message1); // abrir o broker online
    }

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    // Primeira maneira de fazer, no entanto ela é mais recomendada para recuperar dados do usuario salvo no banco
    // useEffect(() => {
    //     const user = firebase.auth().currentUser;
    //     if (user) {
    //         database.collection(route.params.idUser).onSnapshot((query) => {
    //             const list = []
    //             query.forEach((doc) => {
    //                 list.push({ ...doc.data(), id: doc.id });
    //             });
    //             setUsers(list)
    //             console.log(route.params.idUser)
    //         });
    //     } else {
    //         console.log("erro")
    //     }

    // Segunda maneira de fazer
    //     const user = firebase.auth().currentUser;
    //     if (user !== null) {
    //         // The user object has basic properties such as display name, email, etc.
    //         const displayName = user.displayName;
    //         const email = user.email;
    //         const photoURL = user.photoURL;
    //         const emailVerified = user.emailVerified;

    //         // The user's ID, unique to the Firebase project. Do NOT use
    //         // this value to authenticate with your backend server, if
    //         // you have one. Use User.getIdToken() instead.
    //         const uid = user.uid;
    //         console.log(displayName)
    //     }
    // }, [])

    return (
        <View style={styles.container}>
            <Text>Bem-vindo: {user.displayName}</Text>

            {/* <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            /> */}
            <TouchableOpacity style={styles.buttonLigar} onPress={ligar}>
                <Text>Abrir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDesligar} onPress={desligar}>
                <Text>Fechar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogout} onPress={() => { logout() }}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}