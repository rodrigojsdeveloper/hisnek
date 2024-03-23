import { Image, View } from "react-native";

import { styles } from "./style";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/shopping-cart.png')}
        width={10}
        height={10}
      />
    </View>
  )
};
