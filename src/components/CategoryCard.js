import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CategoryCard = (props) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryText}>{props.categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginHorizontal: 10,
    height: 125,
    width: 125,
    backgroundColor: '#CB202D',
    justifyContent: 'center',
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
});

export default CategoryCard;
