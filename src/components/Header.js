import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { screenHeight } from '../helpers/dimensions';

const Header = ({ toggle }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <View>
          <Icon name="account-circle" type="material" onPress={toggle} />
        </View>
        <View>
          <Text style={styles.fontStyle}>Zomato</Text>
        </View>
      </View>
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
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default Header;
