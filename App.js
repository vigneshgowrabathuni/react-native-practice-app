import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleOnChange = (text) => {
    console.log(text);
    setText(text);
  };

  const handleAdd = () => {
    setTasks([...tasks, text]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="Enter your task..."
          onChangeText={handleOnChange}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      <View style={styles.taskListTitle}>
        <Text>List of tasks..</Text>
        {tasks.map((task) => (
          <Text key={task}>{task}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginRight: 8,
    padding: 8,
  },
  taskListTitle: {
    fontSize: 16,
    fontWeight: 700,
    paddingTop: 24,
    paddingBottom: 24,
  },
});
