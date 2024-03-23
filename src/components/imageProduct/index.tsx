import { Image } from "react-native";
import { ImageProductProps } from "../../types/interfaces";

import { styles } from "./style";

export const ImageProduct = ({ uri }: ImageProductProps) => {
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="contain"
    />
  );
};
