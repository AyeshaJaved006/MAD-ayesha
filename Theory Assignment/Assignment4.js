import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';


const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  todos: todosReducer,
});


const store = createStore(rootReducer);

const Todo = ({ item, onToggle, onRemove }) => {
  const toggle = () => onToggle({ id: item.id });
  const remove = () => onRemove(item.id);

  return (
    <View>
      <Text
        style={{
          textDecorationLine: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.text}
      </Text>
      <Button title="Toggle" onPress={toggle} />
      <Button title="Remove" onPress={remove} />
    </View>
  );
};

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo item={item} onToggle={onToggle} onRemove={onRemove} />}
      keyExtractor={(item) => item.id.toString()} 
    />
  );
};

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: ADD_TODO, payload: { text, id: Date.now() } });
      setText('');
    }
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} placeholder="Add a todo" />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: (todo) => dispatch({ type: TOGGLE_TODO, payload: todo }),
  onRemove: (id) => dispatch({ type: REMOVE_TODO, payload: { id } }),
});

const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
const ConnectedAddTodo = connect(null, mapDispatchToProps)(AddTodo);
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Todos" component={ConnectedTodoList} />
          <Tab.Screen name="Add Todo" component={ConnectedAddTodo} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;