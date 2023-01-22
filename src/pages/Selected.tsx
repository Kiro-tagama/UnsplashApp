import { StyleSheet, Text, View } from 'react-native';

export default function Selected() {
  return (
    <View style={styles.container}>
      <Text>Selected</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
