import React, { useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Product } from '../components/product';
import { Header } from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../context/product.context';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { products } = useContext(ProductContext);

  const nav = useNavigation();

  React.useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, [nav]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header />
        <FlatList
          contentContainerStyle={styles.scrollView}
          data={products}
          renderItem={({ item }) => (
            <Product navigation={navigation} product={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

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
    marginTop: 80,
    paddingBottom: 80,
  },
});
