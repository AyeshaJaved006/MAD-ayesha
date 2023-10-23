import React, { useState } from 'react';
import { View,SafeAreaView, Text, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const TodoList = () => {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };

  const removeTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Add a Task:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <Button title="Add" onPress={addTask} />
      <Text>Task List:</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeTask(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default TodoList;


  return (
    <SafeAreaView>
      <Text style={{textAlign:'center'}}>Counter: {count}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />
    </SafeAreaView>
  );
};

export default App;
