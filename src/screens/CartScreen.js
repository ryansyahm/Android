import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import Center from '../helpers/Center';
import faker from 'faker';
import { Button, Header } from 'react-native-elements';

// UNFINISHED

const arr = [
  {
    name: 'Salad',
    price: 5,
  },
  {
    name: 'Pizza',
    price: 5,
  },
  {
    name: 'Ball',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
];

const CartScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     setData(Array.from(Array(15), () => faker.image.image()));
  //   }, []);
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <Header
        centerComponent={{ text: 'Cart', style: { color: 'white' } }}
        leftComponent={{
          icon: 'arrow-left',
          color: 'white',
          onPress: () => navigation.goBack(),
        }}
        containerStyle={{ backgroundColor: 'teal' }}
      />
      <FlatList
        keyExtractor={(item, idx) => idx.toString()}
        data={arr}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../sampledata/gambar.jpg')}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.infoContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.productNameStyle}>{item.name}</Text>
                <Text
                  style={{
                    marginHorizontal: 8,
                    fontSize: 18,
                    color: '#e3fdfd',
                  }}>
                  X
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.priceStyle}>$3</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Button
                    title="-"
                    containerStyle={styles.btnContainerStyle}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    type="clear"
                  />
                  <Text
                    style={{
                      backgroundColor: 'white',
                      height: 50,
                      width: 50,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 20,
                      borderRadius: 6,
                    }}>
                    3
                  </Text>
                  <Button
                    title="+"
                    containerStyle={styles.btnContainerStyle}
                    buttonStyle={styles.buttonStyle}
                    type="clear"
                    titleStyle={styles.buttonTitleStyle}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.containerStyle}
      />
      <View
        style={{
          // flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // alignContent: 'space-around',
          // flex: 1,
          // height: 150,
          alignContent: 'space-between',
        }}>
        <View>
          <Text>Total: $12</Text>
        </View>
        <View>
          <Button
            title="CHECKOUT"
            buttonStyle={{ backgroundColor: '#71c9ce' }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 30,
    alignItems: 'center',
    // flex: 1,
  },
  listContainer: {
    // flex: 1,
    height: 150,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#cbf1f5',
    borderRadius: 6,
    marginVertical: 5,
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  productNameStyle: {
    fontSize: 20,
  },
  priceStyle: {
    fontSize: 16,
  },
  btnContainerStyle: {
    height: 50,
    width: 40,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonStyle: {
    // backgroundColor: '#71c9ce',
  },
  buttonTitleStyle: {
    color: '#71c9ce',
    fontSize: 22,
  },
});

export default CartScreen;
