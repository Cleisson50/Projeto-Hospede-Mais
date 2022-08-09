import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useBackHandler } from '@react-native-community/hooks';
import styles from "./style";
import { collection, getDocs } from "firebase/firestore";
import Paho from "paho-mqtt";

export default function Task({ navigation, route }) {
    const database = firebase.firestore();
    const [usuario, setUsuario] = useState("");

    var clientID = "ID-" + Math.round(Math.random() * 1000);
    const client = new Paho.Client(
        // 'broker.emqx.io',
        // 8083,
        '10.44.1.35',
        9001,
        // '/',
        clientID
    )

    client.connect({
        onSuccess: function () {
            console.log("connected")
            // client.subscribe("esp32/output")
            // client.subscribe("esp32/distance")
            client.subscribe(usuario.porta); // As linhas a seguir sao uma tentativa de envio de mensagem
        },
        onFailure: function () {
            console.log("Desconectado")
        },
        // userName: 'emqx',
        // password: 'public',
        // useSSL: true,
    })

    const [invert, setInvert] = useState(true);

    useBackHandler(() => {
        if (invert == true) {
            setInvert(false);
            return true;
        } else {
            return false;
        }
    });

    function ligar() {
        const message1 = new Paho.Message("on"); // AGORA funcionando
        message1.destinationName = usuario.porta; // para testar

        client.send(message1); // abrir o broker online
    }

    function desligar() {
        const message1 = new Paho.Message("off"); // AGORA funcionando
        message1.destinationName = usuario.porta; // para testar

        client.send(message1); // abrir o broker online
    }

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    async function registro() {
        const docRef = await database.collection("users").doc(route.params.idUser);
        docRef.get().then(function (doc) {
            if (doc.exists) {
                setUsuario(doc.data())
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    useEffect(() => {
        registro()
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.usuario}>Bem-vindo: {usuario.name}</Text>

            <View style={styles.icon}>
                {invert ? (
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../img/lock1.png')}
                    />
                ) : (
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../img/unlock1.png')}
                    />
                )
                }
            </View>
            <View>
                {invert ? (
                    <TouchableOpacity onPress={() => { setInvert(false); ligar() }} style={styles.button}>
                        <Text style={styles.paragraph}>Abrir</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => { setInvert(true); desligar() }} style={styles.button2}>
                        <Text style={styles.paragraph}>Fechar</Text>
                    </TouchableOpacity>
                )
                }
            </View>

            <TouchableOpacity style={styles.buttonLogout} onPress={() => { logout() }}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}