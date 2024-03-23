import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Circle, Path, Svg } from "react-native-svg";
import { Logo } from "../logo";
import { ProductContext } from "../../context/product.context";
import { HeaderProps } from "../../types/interfaces";

import { styles } from "./style";

export const Header = ({ goBack }: HeaderProps) => {
  const { quantity } = useContext(ProductContext);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCart = () => {
    navigation.navigate("Cart" as never);
  };

  return (
    <View style={styles.container}>
      {
        goBack ? (
          <TouchableOpacity onPress={handleGoBack}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <Path d="m12 19-7-7 7-7" />
              <Path d="M19 12H5" />
            </Svg>
          </TouchableOpacity>
        ) : (
          <Logo />
        )
      }

      <TouchableOpacity onPress={handleCart}>
        {
          quantity > 0 && (
            <View style={styles.containerQuantity}>
              <Text style={styles.textQuantity}>{quantity}</Text>
            </View>
          )
        }
        <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <Circle cx="8" cy="21" r="1" />
          <Circle cx="19" cy="21" r="1" />
          <Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};
