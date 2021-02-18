import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Center from '../helpers/Center';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { Header } from '../components';
import { StackNav, TabNav } from '.';

const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
  return (
    // <Header toggle={navigation.toggleDrawer} />
    <Center>
      <Text>Home</Text>
      {/* <Button title="Open" onPress={navigation.openDrawer} />
      <Button title="Close" onPress={navigation.closeDrawer} />
      <Button title="Toggle" onPress={navigation.toggleDrawer} /> */}
      {/* <Button title="Jump" onPress={() => navigation.jumpTo('Settings')} /> */}
    </Center>
  );
};
const Logout = () => {
  return (
    <Center>
      <Text>Logout</Text>
    </Center>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      drawerPosition="right">
      <Drawer.Screen
        name="Home"
        component={TabNav}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
