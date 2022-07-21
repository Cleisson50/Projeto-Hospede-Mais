import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorageStatic } from "react-native";
import firebase from "../../config/firebaseConfig";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RedefinirSenha({ navigation }) {
    const [email, setEmail] = useState("");

    const Redefinir = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                navigation.navigate("Login")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.title}>Redefinir sua senha</Text>
            <TextInput style={styles.input} placeholder="Insira seu email" type="text" onChangeText={(text) => setEmail(text)} value={email} />
            <TouchableOpacity style={styles.buttonRegister} onPress={() => { Redefinir() }}>
                <Text style={styles.textButtonRegister}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}