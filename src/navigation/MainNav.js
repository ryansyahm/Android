import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, TextInput } from 'react-native';
import { StackNav } from '.';
import Center from '../helpers/Center';

const MainNav = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState(null);
  return (
    <>
      {username ? (
        <StackNav />
      ) : (
        <Center>
          <TextInput placeholder="username" onChangeText={(e) => setText(e)} />
          <Button title="Log In" onPress={() => setUsername(text)} />
        </Center>
      )}
    </>
  );
};

export default MainNav;
