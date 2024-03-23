import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { styles } from "./style";

interface HeaderProps {
  goBack?: boolean
}

export const Header = ({ goBack }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {
        goBack && (
          <TouchableOpacity onPress={handleGoBack}>
            <Image
              source={require('../../../assets/arrow_back.png')}
            />
          </TouchableOpacity>
        )
      }

      <Image
        source={require('../../../assets/shopping-cart.png')}
      />
    </View>
  )
};
