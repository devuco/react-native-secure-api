import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Credentials from 'react-native-secure-api';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    const getUrl = async () => {
      const url = await Credentials.get('BASE_URL');
      setResult(url);
    };
    getUrl();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
