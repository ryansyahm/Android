import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { screenHeight } from '../../helpers/dimensions';

const ShowList = ({ todo, completeTodo, deleteCompleted }) => {
  const renderTodo = ({ item, index }) => {
    console.log(item.time);
    const todoStyle = {
      mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      listContainer: {
        height: 75,
        width: 350,
        backgroundColor: item.status === 'ongoing' ? 'skyblue' : 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
      textStyle: {
        color: 'white',
        fontSize: 25,
      },
      captionStyle: {
        color: 'gray',
        fontSize: 15,
      },
    };
    return (
      <TouchableOpacity
        onPress={
          item.status === 'ongoing'
            ? () => completeTodo(item.id)
            : () => deleteCompleted(item.id)
        }>
        <View style={todoStyle.mainContainer}>
          <View style={todoStyle.listContainer}>
            <Text style={todoStyle.textStyle}>{item.todo}</Text>
            <Text style={todoStyle.captionStyle}>
              {item.status === 'ongoing' ? 'Set at: ' : 'Completed at: '}
              {item.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.flatList}>
      <FlatList
        data={todo}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
        // style={styles.flatList}
        //   ListFooterComponent={AddTodo}
        // contentContainerStyle={styles.flatList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flatList: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ShowList;
