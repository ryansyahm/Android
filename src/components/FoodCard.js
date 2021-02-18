import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { screenWidth } from '../helpers/dimensions';

const FoodCard = ({ image, title }) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={{ uri: image }} style={styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: screenWidth / 2,
    width: screenWidth / 2,
  },
});

export default FoodCard;
