import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../context/product.context';
import { ProductInCart } from '../components/productInCart';

export const CartScreen = () => {
  const { productsInCart, subTotal, quantity } = useContext(ProductContext);

  const nav = useNavigation();

  const handleHome = () => {
    nav.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.cartTitle}>Carrinho</Text>
        <FlatList
          style={styles.cart}
          data={productsInCart}
          renderItem={({ item }) => (
            <ProductInCart product={item} />
          )}
          ListEmptyComponent={<Text style={styles.emptyMessage}>Seu carrinho está vazio.</Text>}
          ListFooterComponent={
            productsInCart.length > 0 ? <View style={styles.viewQuantity}>
              <View style={styles.content}>
                <Text style={styles.label}>Subtotal: </Text>
                <Text style={styles.value}>$ {subTotal}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.label}>Quantidade: </Text>
                <Text style={styles.value}>{quantity}</Text>
              </View>
            </View> : <></>
          }
        />

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
    gap: 30,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    textAlign: 'center',
  },
  cart: {
    flex: 1,
    backgroundColor: '#202224',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
  },
  emptyMessage: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFF',
    padding: 15,
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
  viewQuantity: {
    padding: 10,
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFF',
  },
  value: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#7C7C8A',
  },
});
