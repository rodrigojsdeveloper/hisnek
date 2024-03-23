import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Product } from './src/components/product';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0E0F11',
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  scrollView: {
    gap: 10,
  },
});
