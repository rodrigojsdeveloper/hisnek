import { PropsWithChildren } from "react";
import { Text } from "react-native";

import { styles } from "./style";

export const Price = ({ children }: PropsWithChildren) => {
  return (
    <Text style={styles.price}>R$ {children}</Text>
  );
};
