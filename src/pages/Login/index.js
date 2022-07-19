import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import firebase from "../../config/firebaseConfig";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewUser from "../NewUser";
import RedefinirSenha from "../Redefinir";

import { FcGoogle } from 'react-icons/fc';


export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                navigation.navigate("Task", { idUser: user.uid })
                // ...
            })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }
    const loginGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Task", { idUser: user.uid })
            }
        });
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Insira seu email" type="text" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira uma senha" type="text" onChangeText={(text) => setSenha(text)} value={senha} />
            {errorLogin === true
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>E-mail ou senha invalidos</Text>
                </View>
                :
                <View />
            }
            {email === "" || senha === ""
                ?
                <TouchableOpacity disabled={true} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity style={styles.buttonLogin} onPress={loginGoogle}>
            <FcGoogle size={22}/><Text style={styles.textButtonLogin}>Login com Google</Text>
            </TouchableOpacity>
            <Text style={styles.registration}>
                Não está registrado?
            <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("NewUser")}>
                    Inscreva-se agora
            </Text>
            </Text>
            <Text style={styles.registration}>
                Esqueceu sua senha?
                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("RedefinirSenha")}>
                    Redefinir
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}