import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Metas from '../Metas';

export default function TaskList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    alert('Parabéns! Tarefa concluída!');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          placeholderTextColor="#FFF"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {tasks.map((task, index) => (
        <View key={index} style={styles.taskItem}>
          <Text style={styles.taskTitle}>{task}</Text>
          <Button
            title="Concluir"
            onPress={() => completeTask(index)}
            color="#006400"
          />
          <Button
            title="Excluir"
            onPress={() => deleteTask(index)}
            color="#FF6B5F"
          />
        </View>
      ))}

<TouchableOpacity style={styles.metasButton} onPress={() => navigation.navigate('Metas', { tasks: tasks })}>
  <Text style={styles.metasButtonText}>Ver Metas</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF8EFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#FFF',
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#FFF',
    marginLeft: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTarefas: {
    marginTop: 55,
    borderRadius: 50,
  },
  addButtonText: {
    color: '#AF8EFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
  },
  metasButton: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  metasButtonText: {
    color: '#AF8EFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
