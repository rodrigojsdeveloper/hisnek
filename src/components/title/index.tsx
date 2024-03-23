import { PropsWithChildren } from "react";
import { Text } from "react-native";

import { styles } from "./style";

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
};
