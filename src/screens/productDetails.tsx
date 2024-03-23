import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { ProductContext } from '../context/product.context';
import { ProductDetailsProps } from '../types/interfaces';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalhes do Produto</Text>
      <Text>ID do Produto: {productDetails.id}</Text>
      <Text>Nome: {productDetails.name}</Text>
      <Text>Preço: ${productDetails.price}</Text>
      <Text>Descrição: {productDetails.description}</Text>
    </View>
  );
};
