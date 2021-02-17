import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Center from '../helpers/Center';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native';

const Tab = createBottomTabNavigator();

const Home = (props) => {
  console.log(props);
  return (
    <Center>
      <Text>Home</Text>
      <Button
        title="Click Me"
        onPress={() => props.navigation.jumpTo('Settings')}
      />
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

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return (
            <Icon name={iconName} type="material" size={30} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNav;
