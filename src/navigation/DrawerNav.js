import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Center from '../helpers/Center';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { Header } from '../components';

const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
  return (
    // <Header toggle={navigation.toggleDrawer} />
    <Center>
      <Text>Home</Text>
      {/* <Button title="Open" onPress={navigation.openDrawer} />
      <Button title="Close" onPress={navigation.closeDrawer} />
      <Button title="Toggle" onPress={navigation.toggleDrawer} /> */}
      <Button title="Jump" onPress={() => navigation.jumpTo('Settings')} />
    </Center>
  );
};
const Settings = () => {
  return (
    <Center>
      <Text>Settings</Text>
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
        component={Home}
        options={{ title: 'Rumah' }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
