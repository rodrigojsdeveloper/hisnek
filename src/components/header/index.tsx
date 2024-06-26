import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Circle, Line, Path, Polyline, Svg } from "react-native-svg";
import { Logo } from "../logo";
import { ProductContext } from "../../context/product.context";
import { HeaderProps } from "../../types/interfaces";
import { signOut } from "aws-amplify/auth";

import { styles } from "./style";
import { theme } from "@/theme";

export const Header = ({ goBack }: HeaderProps) => {
  const { quantity } = useContext(ProductContext);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCart = () => {
    navigation.navigate("Cart" as never);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {
        goBack ? (
          <TouchableOpacity onPress={handleGoBack}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.white} strokeWidth="2">
              <Path d="m12 19-7-7 7-7" />
              <Path d="M19 12H5" />
            </Svg>
          </TouchableOpacity>
        ) : (
          <Logo />
        )
      }

      <View style={styles.contentIcons}>
        <TouchableOpacity onPress={handleCart}>
          {
            quantity > 0 && (
              <View style={styles.containerQuantity}>
                <Text style={styles.textQuantity}>{quantity}</Text>
              </View>
            )
          }
          <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Circle cx="8" cy="21" r="1" />
            <Circle cx="19" cy="21" r="1" />
            <Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignOut}>
          <Svg width={22} height={22} viewBox="0 0 24 24">
            <Path
              d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Polyline
              points="16 17 21 12 16 7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Line
              x1={21}
              y1={12}
              x2={9}
              y2={12}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};
