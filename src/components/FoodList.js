import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const FoodList = (props) => {
  console.log(props);
  const { item } = props;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ProductDetail', {
          productName: item,
          price: Math.round(Math.random() * 10),
        })
      }>
      <View>
        <Text>{item}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default FoodList;
