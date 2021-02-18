import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './src/redux/reducers';
import {
  //   Main,
  //   Todo,
  // HomeScreen,
  // ProductScreen,
  CartScreen,
} from './src/screens';
import { Header } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import {
  // StackNav,
  // TabNav,
  // DrawerNav,
  // MainNav,
  // AuthStack,
  // ProductStack,
  ProfileDrawer,
} from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    // <SafeAreaProvider>
    <NavigationContainer>
      <Provider store={store}>
        {/* <Header /> */}
        {/* <Todo /> */}
        {/* <StackNav /> */}
        {/* <TabNav /> */}
        {/* <DrawerNav /> */}
        {/* <MainNav /> */}
        {/* <AuthStack /> */}
        {/* <HomeScreen /> */}
        {/* <ProductScreen /> */}
        {/* <ProductStack /> */}
        {/* <CartScreen /> */}
        <ProfileDrawer />
      </Provider>
    </NavigationContainer>
    // </SafeAreaProvider>
  );
};

export default App;
