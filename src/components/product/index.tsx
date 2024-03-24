import { TouchableOpacity, View } from "react-native";
import { ImageProduct } from "../imageProduct";
import { Title } from "../title";
import { Price } from "../price";
import { ProductProps } from "../../types/interfaces";

import { styles } from "./style";

export const Product: React.FC<ProductProps> = ({ navigation, product }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
      <View style={styles.container}>
        <ImageProduct uri={product.img} alt={product.name} />

        <View style={styles.content}>
          <Title>{product.name}</Title>

          <Price>{product.price}</Price>
        </View>
      </View>
    </TouchableOpacity>
  );
};
