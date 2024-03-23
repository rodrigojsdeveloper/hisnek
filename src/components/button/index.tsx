import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtoProps } from "../../types/interfaces";

import { styles } from "./style";

export const Button = ({ onPress, children }: PropsWithChildren<ButtoProps>) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
