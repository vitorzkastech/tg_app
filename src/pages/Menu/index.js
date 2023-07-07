import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Menu({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Página Inicial" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TaskList')}>
        <Text style={styles.buttonText}>Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AF8EFF',
  },
  menuButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    padding: 8,
  },
  menuButtonText: {
    color: '#AF8EFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#AF8EFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
