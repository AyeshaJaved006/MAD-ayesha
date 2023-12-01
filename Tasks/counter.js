import React, { useState } from 'react';
import { View,SafeAreaView, Text, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView>
      <Text style={{textAlign:'center'}}>Counter: {count}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />
    </SafeAreaView>
  );
};

export default App;
