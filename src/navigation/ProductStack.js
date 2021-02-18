import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen } from '../screens';
import { ProfileDrawer } from '.';

const Stack = createStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Product Screen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default ProductStack;
