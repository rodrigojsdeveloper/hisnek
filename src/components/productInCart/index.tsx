import { Image, Text, View } from "react-native";
import { ProductDetailsProps } from "../../types/interfaces";
import { Svg, Path } from 'react-native-svg';

import { styles } from './style'

interface ProductInCartProps {
  product: ProductDetailsProps
}

export const ProductInCart = ({ product }: ProductInCartProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: product.img }} />
        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <Path d="M18 6 6 18" />
          <Path d="m6 6 12 12" />
        </Svg>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Produto: </Text>
        <Text style={styles.value}>{product.name}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Preço: </Text>
        <Text style={styles.value}>$ {product.price}</Text>
      </View>
    </View>
  )
};
