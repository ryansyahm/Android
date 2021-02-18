import React from 'react';
import { Text } from 'react-native';
import Center from '../helpers/Center';
import { PricingCard } from 'react-native-elements';
import { addToCartAction } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

const ProductScreen = ({ route, navigation }) => {
  console.log(navigation);
  console.log(route);
  const dispatch = useDispatch();

  const addToCartPress = () => {
    dispatch(
      addToCartAction({
        name: route.params.name,
        price: route.params.price,
      }),
    );
    Alert.alert('Added to Cart!');
  };
  return (
    <Center>
      <PricingCard
        color="#71c9ce"
        title={route.params.name}
        price={`$${route.params.price}`}
        button={{ title: 'Add to Cart' }}
        onButtonPress={addToCartPress}
        containerStyle={{ width: 300 }}
      />
    </Center>
  );
};

export default ProductScreen;
