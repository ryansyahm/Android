import React from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Center from '../helpers/Center';
import { createStackNavigator } from '@react-navigation/stack';
import faker from 'faker';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../redux/actions';
import { FoodList } from '../components';

const ProductList = ({ navigation }) => {
  //   console.log(props);
  return (
    <FlatList
      ListHeaderComponent={() => (
        <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
      )}
      data={Array.from(Array(50), () => faker.commerce.product())}
      renderItem={({ item }) => <FoodList item={item} />}
    />
  );
};
const ProductDetail = ({ route, navigation }) => {
  //   const nama = props.route.params.nama;
  //   const usia = props.route.params.usia;
  const dispatch = useDispatch();
  const { productName, price } = route.params;

  const addToCart = () => {
    dispatch(addToCartAction({ productName, price, id: new Date().getTime() }));
    navigation.goBack();
  };

  return (
    <Center>
      <Text>{productName}</Text>
      <Text>USD: ${price}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
      {/* <Button
        title="Component: Two"
        onPress={() => props.navigation.navigate('Three', { nama, usia })}
        // onPress={() => props.navigation.replace('Three')}
      /> */}
    </Center>
  );
};
const Cart = (props) => {
  console.log(props);
  const cart = useSelector(({ cart }) => cart.cart);
  const renderTotal = () => {
    let total = 0;
    cart.forEach(({ price }) => (total += price));
    return total;
  };
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => (
        <View>
          <Text>
            {item.productName} ${item.price}
          </Text>
        </View>
      )}
      ListFooterComponent={
        <View>
          <Text>${renderTotal()}</Text>
        </View>
      }
    />
  );
};

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default StackNav;
