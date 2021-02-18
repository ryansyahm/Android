{
  /* <Button title="Click Me"/> */
}

const Button = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

<Button>Click Me!</Button>;

const Button = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};
