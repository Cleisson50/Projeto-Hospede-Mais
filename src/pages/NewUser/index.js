import React, { useId, useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../../config/firebaseConfig";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { MaskedTextInput } from "react-native-mask-text";

export default function NewUser({ navigation }) {
    const database = firebase.firestore()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [porta, setPorta] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    async function register() {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(database => {
                const uid = database.user.uid;
                const users = firebase.firestore().collection('users');
                users.doc(uid).set({
                    name: nome, telefone: telefone, porta: porta, email: email
                });
            });
        navigation.navigate("Task")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar uma nova conta</Text>
            <TextInput style={styles.input} placeholder="Insira seu nome" type="text" onChangeText={setNome} value={nome} testID="camponome" />
            <TextInput style={styles.input} placeholder="Insira seu email" type="text" onChangeText={setEmail} value={email} testID="campoemail" />
            <TextInput style={styles.input} placeholder="Insira a porta" type="text" onChangeText={setPorta} value={porta} testID="campoporta" />
            <MaskedTextInput style={styles.input} keyboardType="phone-pad" mask="(99) 99999-9999" placeholder="Insira seu número de telefone" type="text" onChangeText={setTelefone} value={telefone} testID="camponumero" />
            <View style={styles.inputprincipal}>
                <TextInput style={styles.inputArea} placeholder="Insira uma senha" type="text" onChangeText={setSenha} secureTextEntry={hidePass} value={senha} testID="camposenha" />


                <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                    <Ionicons name="eye" color='#000000' size={25} />
                </TouchableOpacity>
            </View>

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
                <TouchableOpacity disabled={true} style={styles.buttonRegister} testID="registrarDesativado">
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.buttonRegister} onPress={register} testID="registrarAtivado">
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>
                Já está registrado?
                <Text style={styles.linkLogin} onPress={() => navigation.navigate("Login")}>
                    Login
                </Text>
            </Text>
        </View>
    )
}