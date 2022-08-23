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

    const clientID = "ID-" + Math.round(Math.random() * 1000);
    const client = new Paho.Client(
        'broker.emqx.io',
        8083,
        // '10.44.1.35',
        // 9001,
        // '/',
        clientID
    )

    client.connect({
        onSuccess: function () {
            console.log("Conectado")
            client.subscribe(usuario.porta);
        },
        onFailure: function () {
            console.log("Desconectado")
        },
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
        try{
            const message1 = new Paho.Message("on");
            message1.destinationName = usuario.porta;
    
            client.send(message1);
        }catch(error){
            alert("Problema na conexão, consulte a recepção");
            setInvert(true);
        }
        
    }

    function desligar() {
        try{
            const message1 = new Paho.Message("off");
            message1.destinationName = usuario.porta;
    
            client.send(message1);
        }catch(error){
            alert("Problema na conexão, consulte a recepção");
            setInvert(true);
        }
        
    }

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {

        });
    }

    async function registro() {
        const docRef = await database.collection("users").doc(route.params.idUser);
        docRef.get().then(function (doc) {
            if (doc.exists) {
                setUsuario(doc.data())
            } else {
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
                    Sair
                </Text>
                <MaterialCommunityIcons name="location-exit" size={23} color="#000000" />
            </TouchableOpacity>
        </View>
    )
}