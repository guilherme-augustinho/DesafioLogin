import { View, Image, StyleSheet, Text, TextInput, Switch, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexts } from './context';


export function Cadastro(props) {
    const [inicio, setInicio] = useState(false)
    const {utils, setUtils} = useContext(UtilsContexts)

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")
    const [notificacao, setNotificacao] = useState("")
    

    if(utils.Usuario == undefined)
    {
        setUtils({ ...utils, Usuario: []})
    }

    function goToLogin() {
        if (senha == senha2) {

            const Usuario = {
                nome: nome,
                idade: idade,
                sexo: sexo,
                email: email,
                senha: senha,
                senha2: senha2,
                notificacao: inicio? "Sim" : "Nao",
                id: utils.Usuario.length + 1
            }
            console.log(Usuario)
            const Usuarios = [...utils.Usuario, Usuario]

            setUtils({ ...utils, Usuario: Usuarios })
            props.navigation.navigate('Login')
        }
    }

        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('./image/image.png')}
                />

                <Text style={styles.texts}>Nome:</Text>
                <TextInput
                    onChangeText={e => setNome(e)}
                    value={nome}
                    style={styles.inputs} />

                <Text style={styles.texts}>Idade:</Text>
                <TextInput
                    onChangeText={e => setIdade(e)}
                    value={idade}
                    style={styles.inputs} />

                <Text style={styles.texts}>Sexo:</Text>
                <TextInput
                    onChangeText={e => setSexo(e)}
                    value={sexo}
                    style={styles.inputs} />

                <Text style={styles.texts}>Email:</Text>
                <TextInput
                    onChangeText={e => setEmail(e)}
                    value={email}
                    style={styles.inputs} />

                <Text style={styles.texts}>Senha:</Text>
                <TextInput
                    onChangeText={e => setSenha(e)}
                    value={senha}
                    style={styles.inputs} />

                <Text style={styles.Confirm}>Confirmar senha:</Text>
                <TextInput
                    onChangeText={e => setSenha2(e)}
                    value={senha2}
                    style={styles.inputs} />

                <Text style={styles.notfy}>Deseja receber notificações?</Text>

                <Switch
                    style={styles.sw}
                    onValueChange={() => setInicio(!inicio)}
                    value={inicio}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={"black"}
                    activeThumpColor={"#f4f3f4"}
                />

                <TouchableOpacity style={styles.btn} onPress={() => goToLogin()}>
                    <Text style={{ alignItems: 'center', marginTop: '15px', color: 'white' }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2} onPress={() => props.navigation.navigate("Login")}>
                    <Text style={{ alignItems: 'center', marginTop: '15px', color: 'white' }}>Cancelar</Text>
                </TouchableOpacity>

            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            margin: '10px'
        },

        image: {
            height: '200px',
            width: '200px'
        },

        texts: {
            margin: '15px',
            right: '230px',
            fontWeight: 'bold'
        },

        inputs: {
            backgroundColor: 'white',
            width: '500px',
            height: '30px'
        },

        Confirm: {
            margin: '15px',
            right: '195px',
            fontWeight: 'bold'
        },

        notfy: {
            margin: '15px',
            right: '160px',
            fontWeight: 'bold'
        },

        sw: {
            right: '230px'
        },

        btn: {
            backgroundColor: 'black',
            width: '300px',
            height: '50px',
            alignItems: 'center',
            borderRadius: '10px',
            marginTop: '20px'
        },
        btn2: {
            backgroundColor: 'red',
            width: '300px',
            height: '50px',
            alignItems: 'center',
            borderRadius: '10px',
            marginTop: '20px'
        }

    })
