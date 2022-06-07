import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    formTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 22,
        margin: 5,
        color: 'black'
    },
    taskForm: {
        display: 'flex',
    },
    inputForm: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#b2bec3',
        color: 'black',
    },
    btnBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    btnCadastrar: {
        width: 150,
        backgroundColor: '#39bf00',
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        margin: 5,
        color: 'white',
        borderRadius: 8
    }
});