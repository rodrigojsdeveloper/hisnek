import React, { useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../context/product.context';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const CartScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { productsInCart } = useContext(ProductContext);

  const nav = useNavigation();

  const handleHome = () => {
    nav.navigate('Home');
  };

  React.useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, [nav]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header goBack />

        <View style={styles.content}>
          <Text style={styles.cartTitle}>Carrinho</Text>
          <View style={styles.cart}>
            {
              productsInCart.length > 0 ? (
                productsInCart.map(product => (
                  <Text>olá</Text>
                ))) : (
                <Text style={styles.emptyMessage}>Seu carrinho está vazio.</Text>
              )
            }
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleHome}>
          <Text style={styles.buttonText}>retornar para a loja</Text>
        </TouchableOpacity>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    gap: 20,
    marginTop: 80,
  },
  cart: {
    backgroundColor: '#202224',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
  },
  emptyMessage: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#FFF'
  },
  button: {
    backgroundColor: '#202224',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
