import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const AddTodo = ({ submit }) => {
  const [text, setText] = useState('');
  const submitTodo = () => {
    submit(text);
    setText('');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput
            placeholder="Todo"
            style={styles.textInput}
            onChangeText={(e) => setText(e)}
            value={text}
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => submitTodo(text)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 24,
    flex: 1,
    // justifyContent: 'space-around',
  },
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default AddTodo;
