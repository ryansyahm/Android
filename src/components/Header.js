import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { screenHeight } from '../helpers/dimensions';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.fontStyle}>Zomato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // marginTop: (Platform.OS = 'ios' ? 10 : 0),
    height: screenHeight / 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91091e',
  },
  fontStyle: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
});

export default Header;
