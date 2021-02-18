import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Center from '../helpers/Center';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native';
import { StackNav, DrawerNav } from '.';

const Tab = createBottomTabNavigator();

const Beranda = (props) => {
  return (
    <Center>
      <Text>Beranda</Text>
    </Center>
  );
};

const Pengaturan = ({ navigation }) => {
  return (
    <Center>
      <Text>Pengaturan</Text>
    </Center>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Beranda') {
            iconName = 'home';
          } else if (route.name === 'Pengaturan') {
            iconName = 'settings';
          }
          return (
            <Icon name={iconName} type="material" size={30} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Beranda" component={StackNav} />
      <Tab.Screen name="Pengaturan" component={Pengaturan} />
    </Tab.Navigator>
  );
};

export default TabNav;
