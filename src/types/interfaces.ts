import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./navigation";

export interface ProductDetailsProps {
  id: string;
  name: string;
  img: string;
  price: number;
  description: string;
};

export interface HeaderProps {
  goBack?: boolean;
};

export interface ImageProductProps {
  uri: string;
};

export interface ProductProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  product: ProductDetailsProps;
};

export interface ProductInCartProps {
  product: ProductDetailsProps;
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export interface ProductDetailsScreenProps {
  route: RouteProp<RootStackParamList, "ProductDetails">;
};
