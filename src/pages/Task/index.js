import React, { useState, useEffect, useId } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import firebase from "../../config/firebaseConfig"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { collection, getDocs } from "firebase/firestore";
import Paho from "paho-mqtt"

export default function Task({ navigation, route }) {
    const [users, setUsers] = useState([]);
    const database = firebase.firestore()
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


    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user) {
            database.collection(route.params.idUser).onSnapshot((query) => {
                const list = []
                query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setUsers(list)
                console.log(route.params.idUser)

            });
        } else {
            console.log("erro")
        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            />
            {/* <TouchableOpacity style={styles.buttonLigar} onPress={ligar}>
                <Text>Abrir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDesligar} onPress={desligar}>
                <Text>Fechar</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.buttonLogout} onPress={() => { logout() }}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}