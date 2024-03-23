import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { ProductContext } from '../context/product.context';
import { ProductDetailsProps } from '../types/interfaces';
import { Header } from '../components/header';
import { ImageProduct } from '../components/imageProduct';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Price } from '../components/price';

interface ProductDetailsScreenProps {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
}

export const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({ route }) => {
  const { products } = useContext(ProductContext);
  const { id } = route.params;
  const productDetails = products.find((product: ProductDetailsProps) => product.id === id);

  const nav = useNavigation();

  React.useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, [nav]);

  return (
    <SafeAreaView style={styles.safe}>
      <Header goBack />
      <View style={styles.container}>
        <View style={styles.gap25}>
          <Text style={styles.productDetails}>Detalhes do Produto</Text>
          <View style={styles.gap10}>
            <ImageProduct uri={productDetails.img} />

            <View style={styles.gap10}>
              <Title>{productDetails.name}</Title>

              <Price>{productDetails.price}</Price>

              <Description>{productDetails.description}</Description>
            </View>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
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
    marginTop: 80,
  },
  productDetails: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
  },
  gap25: {
    gap: 25,
  },
  gap10: {
    gap: 10,
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
  },
});
