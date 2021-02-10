import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
// import { ZOMATO_KEY, ZOMATO_URL } from './src/helpers/zomato';
import {CategoryCard, FoodCard} from './src/components';
import {categories, collections} from './src/sampledata';

const App = () => {
  // didmount
  useEffect(() => {
    setData(categories.categories);
    setMeals(collections.collections);
  }, []);

  // didupdate
  // jalan setiap kali isi dari variabel yang di dalam array dependency valuenya berubah
  // useEffect(() => {
  //   console.log('didupdate');
  // }, [count]);

  // const fetchCategories = async () => {
  //   console.log('here');
  //   try {
  //     const response = await axios.get(
  //       'https://developers.zomato.com/api/v2.1/categories',
  //       {
  //         headers: {
  //           'user-key': '72841c7d52ae57964f2dda3ee66e5838',
  //         },
  //       },
  //     );
  //     console.log(response.data.categories);
  //     setData(response.data.categories);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const fetchMeals = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await axios.get(
  //       'https://developers.zomato.com/api/v2.1/collections?city_id=1&count=5',
  //       {
  //         headers: {
  //           'user-key': '72841c7d52ae57964f2dda3ee66e5838',
  //         },
  //       },
  //     );
  //     console.log(response.data.collections);
  //     setMeals(response.data.collections);
  //     setLoader(false);
  //   } catch (err) {
  //     console.log(err);
  //     setLoader(false);
  //   }
  // };

  const [data, setData] = useState([]);
  const [meals, setMeals] = useState([]);
  // const [loader, setLoader] = useState(false);
  // const [count, setCount] = useState(0);
  return (
    <View style={styles.mainContainer}>
      <View>
        <FlatList
          horizontal={true}
          data={data}
          style
          renderItem={(a) => (
            <TouchableOpacity
              onPress={() => console.log(a.item.categories.name)}>
              <CategoryCard categoryName={a.item.categories.name} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          onRefresh={() => console.log('refresh')}
          refreshing={false}
          data={meals}
          renderItem={({item}) => (
            <TouchableOpacity onPress={item.collection.title}>
              <FoodCard
                image={item.collection.image_url}
                title={item.collection.title}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
