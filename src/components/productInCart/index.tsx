import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import { ProductInCartProps } from "../../types/interfaces";
import { ProductContext } from "../../context/product.context";
import { Price } from "../price";

import { styles } from "./style";
import { theme } from "@/theme";

export const ProductInCart = ({ product }: ProductInCartProps) => {
  const { handleRemoveProductInCart, handleQuantityAndSubTotal } = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: product.img }} />
        <TouchableOpacity style={styles.buttonClose} onPress={() => {
          handleRemoveProductInCart(product.id);
          handleQuantityAndSubTotal();
        }}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={theme.colors.white} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M18 6 6 18" />
            <Path d="m6 6 12 12" />
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Produto: </Text>
        <Text style={styles.value}>{product.name}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Preço: </Text>
        <Price price={product.price} isDarkGray />
      </View>
    </View>
  );
};
