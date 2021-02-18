import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import Center from '../helpers/Center';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsAction } from '../redux/actions';
import { FoodCard } from '../components';
// import { screenHeight, screenWidth } from '../helpers/dimensions';

// const { height, width } = Dimensions.get('screen');

const Main = () => {
  //   const [orientation, setOrientation] = useState('portrait');
  //   const isPortrait = () => {
  //     return height > width;
  //   };
  //   Dimensions.addEventListener('change', () => {
  //     isPortrait() ? setOrientation('portrait') : setOrientation('landscape');
  //     if (orientation === 'portrait') {
  //       console.log(orientation);
  //     } else {
  //       console.log(orientation);
  //     }
  //   });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsAction());
  }, []);

  const { data, loading } = useSelector((state) => state.meals);

  //   const renderFoodCard = ({ item }) => {
  //     return <FoodCard image={item.collection.image_url} />;
  //   };

  return loading ? (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  ) : (
    <FlatList
      data={data}
      renderItem={({ item }) => <FoodCard image={item.collection.image_url} />}
      numColumns={2}
      //   renderItem={renderFoodCard}
      keyExtractor={(item) => item.collection.collection_id.toString()}
    />
  );
};

export default Main;
