import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import { UtilsContexts } from './context';
import { useState, useContext } from 'react';


export  function Login(props)
{
    const {utils, setUtils} = useContext(UtilsContexts)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    function goToUsuarios(){
        utils.Usuario.forEach(element => {
            
            if(email == element.email && senha == element.senha)
            {
                props.navigation.navigate("Usuarios")
            }
        });
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.textP}> LOGIN </Text>

            <Text style = {styles.textsA}>Email:</Text>
            <TextInput 
            onChangeText={e => setEmail(e)}
            style = {styles.inputs} />

            <Text style = {styles.textsB}>Senha:</Text>
            <TextInput 
            onChangeText={e => setSenha(e)}
            style = {styles.inputs} />

            <TouchableOpacity style = { styles.btn} onPress = {() => goToUsuarios()}>
                <Text style={{ alignItems: 'center', marginTop:'15px', color: 'white'}}>Login</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style =  {styles.btn} onPress = {() => props.navigation.navigate("Cadastro")}>
                <Text style={{ alignItems: 'center', marginTop:'15px', color: 'white'}}>Cadastrar</Text>    
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: '10px',
    },

    textP: {
        fontWeight: 'bold',
        fontSize: '100px'
    },

    textsA: {
        fontWeight: 'bold',
        margin: '10px',
        marginTop: '100px',
        right: '200px'
    },

    textsB: {
        fontWeight: 'bold',
        margin: '10px',
        right: '200px'

    },

    inputs: {
        backgroundColor: 'white',
        width: '440px',
        height: '30px'
        
    },

    btn: {
        backgroundColor: 'black',
        width: '300px',
        height: '50px',
        alignItems: 'center',
        borderRadius: '10px',
        marginTop: '20px'
    }
    
});