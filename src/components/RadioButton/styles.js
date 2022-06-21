import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskForm: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        width: 80,
        margin: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    outLineCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#444',
    }
});