import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useContext } from 'react';
import { UtilsContexts } from './context';

export function Usuarios() {
    const { utils, setUtils } = useContext(UtilsContexts)

    return (
        <View style={styles.container}>
            <Text style={styles.textP}> USUARIO CADASTRADO</Text>

                <FlatList
                    data={utils.Usuario}
                    renderItem={({ item }) =>
                        <View>
                            <View style={styles.vw}>
                                <Text style={styles.texts}>Nome: {item.nome} </Text>
                                <Text style={styles.texts}>Idade: {item.idade}</Text>
                                <Text style={styles.texts}>Sexo: {item.sexo}</Text>
                                <Text style={styles.texts}>Recebe Notificação: {item.notificacao}</Text>
                                <TouchableOpacity style = {styles.btn}>
                                    <Text style = {{marginTop: '15px', color: 'white'}}>DELETAR</Text>
                                </TouchableOpacity> 
                                </View>
                        </View>}
                    keyExtractor={item => item.id}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: '10px'
    },

    textP: {
        fontSize: '100px',
        fontWeight: 'bold'
    },

    vw: {
        border: 'solid 2px grey',
        width: '600px',
        height: '160px',
        borderRadius: '10px',
        margin: '10px'
    },

    texts: {
        margin: '8px'
    },

    btn: {
        width: '100px',
        height: '50px',
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: '10px',
        left: '470px',
        bottom: '50px'
    }
})