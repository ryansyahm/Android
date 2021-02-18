import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Center from '../helpers/Center';
import { ShowList, AddTodo } from '../components/Todo';
import { database } from 'faker';

// Exercise
// Create A Todo App

// user dapat input todo
// user dapat melihat semua todo yang dia input
// user dapat cancel todo
// user dapat set todo menjadi done

// optional
// toggle untuk melihat yang done dan belum selesai

// State management
// local atau global

// react native elements
// nativebase

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const date = new Date();
  const completeTodo = (id) => {
    const tempArr = todo.map((val) => {
      if (val.id === id) {
        return {
          ...val,
          status: 'completed',
          time: date.toTimeString().split(' ')[0],
        };
      }
      return val;
    });
    setTodo(tempArr);
  };

  const deleteCompleted = (id) => {
    const tempArr = todo.filter((val) => {
      return val.id !== id;
    });
    setTodo(tempArr);
  };
  return (
    // <React.Fragment>
    <>
      <ShowList
        todo={todo}
        completeTodo={completeTodo}
        deleteCompleted={deleteCompleted}
      />
      <AddTodo
        submit={(added) =>
          setTodo([
            ...todo,
            {
              id: Math.random(),
              todo: added,
              status: 'ongoing',
              time: date.toTimeString().split(' ')[0],
            },
          ])
        }
      />
    </>
    // </React.Fragment>
  );
};

export default Todo;
