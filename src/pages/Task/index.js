import React, { useState, useEffect, useId } from "react";
import { View, Text, TouchableOpacity, FlatList, Switch } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { GiPadlockOpen, GiPadlock } from 'react-icons/gi'
import { collection, getDocs } from "firebase/firestore";
import Paho from "paho-mqtt"

export default function Task({ navigation, route }) {
    const [initializing, setInitializing] = useState(true);
    const database = firebase.firestore();
    const [switchValue, setSwitchValue] = useState(false);
    const client = new Paho.Client(
        'broker.emqx.io',
        8083,
        '/'
    )

    client.connect({
        onSuccess: function () {
            console.log("connected")
            // client.subscribe("esp32/output")
            // client.subscribe("esp32/distance")
            client.subscribe("Porta-IoT"); // As linhas a seguir sao uma tentativa de envio de mensagem
        },
        onFailure: function () {
            console.log("Desconectado")
        },
        //userName: 'emqx',
        //password: 'public',
        //useSSL: true,
    })

    const user = firebase.auth().currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const uid = user.uid;
        console.log(displayName)
    }

    function ligar() {
        const message1 = new Paho.Message("on"); // AGORA funcionando
        message1.destinationName = "Porta-IoT"; // para testar

        client.send(message1); // abrir o broker online
    }

    function desligar() {
        const message1 = new Paho.Message("off"); // AGORA funcionando
        message1.destinationName = "Porta-IoT"; // para testar

        client.send(message1); // abrir o broker online
    }

    const toggleSwitch = (value) => {
        setSwitchValue(value);
    }


    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    /* Primeira maneira de fazer, no entanto ela é mais recomendada para recuperar dados do usuario salvo no banco*/
    // useEffect(() => {
    //     // const user = firebase.auth().currentUser;
    //     // if (user) {
    //     //     database.collection("users").onSnapshot((query) => {
    //     //         const list = []
    //     //         query.forEach((doc) => {
    //     //             list.push({ ...doc.data(), id: doc.id });
    //     //         });
    //     //         setUsers(list)
    //     //         console.log(user.uid)
    //     //     });
    //     // } else {
    //     //     console.log("erro")
    //     // }

    /* Segunda maneira de fazer*/
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

            {/* <Text>{switchValue ? <GiPadlockOpen size={200} color="#006400" onPress={ligar}/> : <GiPadlock size={200} color="#FF0000" onPress={desligar}/>}</Text>
            <Switch style={{ margin: 20 }} onValueChange={toggleSwitch} value={switchValue} /> */}

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