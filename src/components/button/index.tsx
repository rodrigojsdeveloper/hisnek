import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "../../types/interfaces";

import { styles } from "./style";

export const Button = ({ isBackgroundColor, onPress, children, disabled }: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity
      activeOpacity={isBackgroundColor ? 0.8 : 1}
      style={[{ backgroundColor: isBackgroundColor ? "#202224" : "transparent" }, styles.button]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
