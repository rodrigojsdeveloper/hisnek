import { Image } from "react-native";

import { styles } from './style'

interface ImageProductProps {
  uri: string
}

export const ImageProduct = ({ uri }: ImageProductProps) => {
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  )
};
