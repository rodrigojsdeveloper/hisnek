import { TouchableOpacity, View } from "react-native";
import { Description } from "../description";
import { ImageProduct } from "../imageProduct";
import { Title } from "../title";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import { ProductDetailsProps } from "../../types/interfaces";

import { styles } from "./style";

interface ProductProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  product: ProductDetailsProps
}

export const Product: React.FC<ProductProps> = ({ navigation, product }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ProductDetails', { id: product.id })}>
      <View style={styles.container}>
        <ImageProduct uri={product.img} />

        <View style={styles.content}>
          <Title>{product.name}</Title>

          <Description>{product.description}</Description>
        </View>
      </View>
    </TouchableOpacity>
  );
};
