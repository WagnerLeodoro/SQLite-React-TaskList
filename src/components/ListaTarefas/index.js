import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import { styles } from './styles'

export default class ListaTarefas extends Component {

    getEstilo() {
        if (this.props.situacao == 'Concluído') {
            return { color: '#39bf00', fontWeight: 'bold' }
        } else if (this.props.situacao == 'Atrasado') {
            return { color: '#fa2f5f', fontWeight: 'bold' }
        } else {
            return { color: 'black' }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.taskDescription}>
                    <Text>ID: {this.props.id}</Text>
                    <Text>Tarefa: {this.props.nome}</Text>
                    <Text>Data: {this.props.data}</Text>
                    <Text style={this.getEstilo()}>Status: {this.props.situacao}</Text>
                </View>
                <View style={styles.btnBox}>
                    <TouchableOpacity
                        onPress={() => { this.props.concluir(this.props.id) }}
                        style={styles.btnConcluir}
                    >
                        <Text style={{ color: 'white' }}>Concluída</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.atrasar(this.props.id) }}
                        style={styles.btnAtrasar}
                    >
                        <Text style={{ color: 'white' }}>Atrasada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.deletar(this.props.id) }}
                        style={styles.btnDeletar}
                    >
                        <Text style={{ color: 'white' }}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}