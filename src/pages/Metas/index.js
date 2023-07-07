import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Metas({ route }) {
  const { tasks } = route.params;
  const [completedTasks, setCompletedTasks] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = tasks.length !== 0 ? (completedTasks / tasks.length) * 100 : 0;
    setProgress(newProgress);
  }, [completedTasks, tasks]);

  const handleAddCompletedTask = () => {
    if (completedTasks < tasks.length) {
      setCompletedTasks(completedTasks + 1);
    }
  };

  const handleRemoveCompletedTask = () => {
    if (completedTasks > 0) {
      setCompletedTasks(completedTasks - 1);
    }
  };

  const renderGoals = () => {
    return tasks.map((task, index) => (
      <View key={index} style={styles.goalItem}>
        <Text style={styles.goalTitle}>{task.title}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{`${progress.toFixed(0)}% concluído`}</Text>
      <TouchableOpacity style={styles.button} onPress={handleAddCompletedTask}>
        <Text style={styles.buttonText}>Adicionar Meta Feita</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRemoveCompletedTask}>
        <Text style={styles.buttonText}>Remover Meta Feita</Text>
      </TouchableOpacity>
      <View style={styles.goalList}>{renderGoals()}</View>
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
    marginBottom: 16,
    marginTop: 20,
    color: '#FFF',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#2F80ED', // Cor da barra de tarefas definida como azul
    borderRadius: 5,
  },
  progressText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#AF8EFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goalList: {
    marginTop: 8,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalTitle: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
  },
});
