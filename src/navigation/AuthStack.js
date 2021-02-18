import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Center from '../helpers/Center';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { loginAction } from '../redux/actions';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  return (
    <Center>
      <Text>Login</Text>
      <TextInput onChangeText={(e) => setUsername(e)} />
      <Button title="Login" onPress={() => dispatch(loginAction(username))} />
      <Button
        title="To Register"
        onPress={() => navigation.replace('Register')}
      />
    </Center>
  );
};
const RegisterScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Register</Text>
      <Button title="To Login" onPress={() => navigation.replace('Login')} />
    </Center>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </Center>
  );
};

const AuthStack = () => {
  const { isSignedIn } = useSelector((state) => state.auth);
  if (isSignedIn === true) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }
  //   return (
  //     <Stack.Navigator>
  //       {isSignedIn ? (
  //         <>
  //           <Stack.Screen name="Home" component={HomeScreen} />
  //         </>
  //       ) : (
  //         <>
  //           <Stack.Screen name="Login" component={LoginScreen} />
  //           <Stack.Screen name="Register" component={RegisterScreen} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   );
};

export default AuthStack;
