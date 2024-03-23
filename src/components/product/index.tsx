import { View } from "react-native";
import { Description } from "../description";
import { ImageProduct } from "../imageProduct";
import { Title } from "../title";

import { styles } from "./style";

export const Product = () => {
  return (
    <View style={styles.container}>
      <ImageProduct uri="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />

      <View style={styles.content}>
        <Title>EcoGlow: Luminária Solar Inteligente para Ambientes Externos</Title>

        <Description>Desfrute da iluminação ao ar livre de forma sustentável com a nossa EcoGlow, uma luminária solar inteligente projetada para ambientes externos.</Description>
      </View>
    </View>
  )
};
