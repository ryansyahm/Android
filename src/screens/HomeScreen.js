import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import Center from '../helpers/Center';
import { Header, ListItem, SearchBar } from 'react-native-elements';
import faker from 'faker';

const HomeScreen = ({ navigation }) => {
  // console.log(navigation);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Array.from(Array(15), () => faker.commerce.product()));
  }, []);

  //   const searchOnInput = (e) => {
  //     setSearch(e);
  //     setData(
  //       data.filter((val) => {
  //         return val.includes(search);
  //       }),
  //     );
  //   };

  const renderList = ({ item }) => {
    return item.toLowerCase().includes(search.toLowerCase()) ? (
      <ListItem
        bottomDivider
        onPress={() =>
          navigation.navigate('Product Screen', {
            name: item,
            price: Math.round(Math.random() * 100),
          })
        }>
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ) : null;

    // if (item.toLowerCase.includes(search.toLowerCase())) {
    //   return (
    //     <ListItem bottomDivider onPress={() => console.log(item)}>
    //       <ListItem.Content>
    //         <ListItem.Title>{item}</ListItem.Title>
    //       </ListItem.Content>
    //       <ListItem.Chevron />
    //     </ListItem>
    //   );
    // }
  };

  return (
    <View>
      <Header
        centerComponent={{ text: 'App', style: { color: 'white' } }}
        rightComponent={{
          icon: 'menu',
          color: 'white',
          onPress: () => navigation.toggleDrawer(),
        }}
        containerStyle={{ backgroundColor: 'teal' }}
      />
      <SearchBar
        placeholder="Search..."
        containerStyle={{ backgroundColor: '#71c9ce', borderColor: '#71c9ce' }}
        inputContainerStyle={{ backgroundColor: '#fff' }}
        value={search}
        onChangeText={(e) => setSearch(e)}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={renderList}
      />
    </View>
  );
};

export default HomeScreen;
