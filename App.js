import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import ListaTarefas from './src/components/ListaTarefas'
import Database from './src/database/Database'
import Tarefa from './src/models/Tarefa'
import { styles } from './src/styles'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      data: "",
      prioridade: "",
      listaTarefas: []
    }
    this.ListarTarefas()
  }

  ListarTarefas() {
    const bd = new Database();
    bd.Listar().then(lista => { this.setState({ listaTarefas: lista }) })
  }

  CadastrarTarefa = (nome, data, prioridade) => {
    const novaTarefa = new Tarefa(nome, data, prioridade, "???");
    const bd = new Database();
    bd.Inserir(novaTarefa);
    this.ListarTarefas()
  }

  ConcluirTarefa = (id) => {
    const bd = new Database();
    bd.Concluir(id);
    this.ListarTarefas()
  }

  AtrasarTarefa = (id) => {
    const bd = new Database();
    bd.Atrasar(id);
    this.ListarTarefas()
  }

  DeletarTarefa = (id) => {
    const bd = new Database();
    bd.Deletar(id);
    this.ListarTarefas()
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.formTitle}>
            <Text style={styles.titulo}>
              Cadastro de Tarefas
            </Text>
          </View>
          <View style={styles.taskForm}>
            <TextInput
              placeholder="Digite o nome da tarefa"
              onChangeText={(valor) => { this.setState({ nome: valor }) }}
              style={styles.inputForm}
            />
            <TextInput
              placeholder="Digite a data de conclusão da tarefa"
              onChangeText={(valor) => { this.setState({ data: valor }) }}
              style={styles.inputForm}
            />
            <TextInput
              placeholder="Digite a prioridade da tarefa"
              onChangeText={(valor) => { this.setState({ prioridade: valor }) }}
              style={styles.inputForm}
            />
          </View>
          <View style={styles.btnBox}>
            <TouchableOpacity style={styles.btnCadastrar}
              onPress={() => { this.CadastrarTarefa(this.state.nome, this.state.data, this.state.prioridade) }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Salvar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formTitle}>
            <Text style={styles.titulo}>
              Lista de Tarefas
            </Text>
          </View>
          {
            this.state.listaTarefas.map(item => (
              <ListaTarefas
                key={item.id}
                id={item.id}
                nome={item.nome}
                data={item.data}
                prioridade={item.prioridade}
                situacao={item.situacao}
                concluir={this.ConcluirTarefa}
                atrasar={this.AtrasarTarefa}
                deletar={this.DeletarTarefa}
              />
            ))
          }
        </ScrollView>
      </View>
    )
  }
}