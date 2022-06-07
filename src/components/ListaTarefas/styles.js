import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#b2bec3'
    },
    taskDescription: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5
    },
    btnBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    btnConcluir: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        backgroundColor: '#39bf00',
        borderRadius: 8
    },
    btnAtrasar: {
        flex: 1,
        flexDirection: 'row',
        margin: 5, alignItems: 'center',
        justifyContent: 'center',
        width: 100, height: 30,
        backgroundColor: '#db5a04',
        borderRadius: 8
    },
    btnDeletar: {
        flex: 1,
        flexDirection: 'row',
        margin: 5, alignItems: 'center',
        justifyContent: 'center',
        width: 100, height: 30,
        backgroundColor: '#d63031',
        borderRadius: 8
    },
});