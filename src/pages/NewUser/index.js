import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import firebase from "../../config/firebaseConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function NewUser({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
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
            {/* <TextInput style={styles.input} placeholder="Insira seu nome" type="text" onChangeText={(text) => setNome(text)} value={nome} /> */}
            <TextInput style={styles.input} placeholder="Insira seu email" type="text" onChangeText={(text) => setEmail(text)} value={email} />
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