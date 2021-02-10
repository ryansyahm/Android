import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import faker from 'faker';

const App = () => {
  // const [data, setNama] = useState([
  //   {id: 1, nama: 'Ryan'},
  //   {id: 2, nama: 'Syahm'},
  // ]);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Array.from(Array(50), () => faker.commerce.product())}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styles.productContainer}>
            <Text style={styles.productText}>{item}</Text>
          </View>
        )}
      />
      <View style={styles.nestedContainer1} />
      <View style={styles.nestedContainer2} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  nestedContainer1: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  nestedContainer2: {
    flex: 1,
    backgroundColor: 'pink',
  },
  productText: {
    fontSize: 30,
  },
  productContainer: {
    height: 125,
    width: 125,
    backgroundColor: 'yellow',
    margin: 10,
  },
});

export default App;
