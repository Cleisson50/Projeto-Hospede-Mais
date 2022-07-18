import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../../config/firebaseConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NewUser({ navigation }) {
    const database = firebase.firestore()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("")
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(database => {
            // Signed in
            const uid = database.user.uid;
            const users = firebase.firestore().collection('users');
            users.doc(uid).set({
                email: email, name: nome, telefone: telefone
            });
            navigation.navigate("Task", { idUser: user.uid })
            // ...
        })
        .catch((error) => {
            setErrorRegister(true)
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.title}>Criar uma nova conta</Text>
            <TextInput style={styles.input} placeholder="Insira seu nome" type="text" onChangeText={(text) => setNome(text)} value={nome} />
            <TextInput style={styles.input} placeholder="Insira seu email" type="text" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={styles.input} autoComplete="postal-address-country" maxLength={18} keyboardType="phone-pad" placeholder="Insira seu número" type="text" onChangeText={(text) => setTelefone(text)} value={telefone} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira uma senha" type="text" onChangeText={(text) => setSenha(text)} value={senha} />
            {errorRegister === true
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
                <TouchableOpacity disabled={true} style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.buttonRegister} onPress={register}>
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>
                Já está registrado?
                <Text style={styles.linkLogin} onPress={() => navigation.navigate("Login")}>
                    Login
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}