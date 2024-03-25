import { Text } from "react-native";
import { PriceProps } from "../../types/interfaces";

import { styles } from "./style";

export const Price = ({ price, isDarkGray }: PriceProps) => {
  return (
    <Text style={[isDarkGray ? styles.darkGray : styles.gray]}>R$ {price.toFixed(2).replace('.', ',')}</Text>
  );
};
