import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { ProductContext } from "@/context/product.context";
import { ProductDetailsProps, ProductDetailsScreenProps } from "@/types/interfaces";
import { Header } from "@/components/header";
import { ImageProduct } from "@/components/imageProduct";
import { Title } from "@/components/title";
import { Description } from "@/components/description";
import { Price } from "@/components/price";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/button";
import { v4 as uuidv4 } from "uuid";
import { theme } from "@/theme";

export const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({ route }) => {
  const { id } = route.params;
  const { handleFindProductDetails, handleAddProductInCart, handleQuantityAndSubTotal, isLoading } = useContext(ProductContext);
  const [productDetails, setProductDetails] = useState<ProductDetailsProps | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const details = await handleFindProductDetails(id);
        setProductDetails(details);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      }
    };

    fetchProductDetails();
  }, [handleFindProductDetails, id]);

  if (!productDetails) {
    return null;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#0E0F11" style="light" />
      <Header goBack />
      <View style={styles.container}>
        <View style={styles.gap25}>
          <Text style={styles.productDetails}>Detalhes do Produto</Text>
          <View style={styles.gap10}>
            <ImageProduct uri={productDetails.img} alt={productDetails.name} />

            <View style={styles.gap10}>
              <Title>{productDetails.name}</Title>

              <Description>{productDetails.description}</Description>

              <Price price={productDetails.price} />
            </View>
          </View>
        </View>

        <Button
          onPress={() => {
            const newId = uuidv4();
            const updatedProductDetails = { ...productDetails, id: newId };
            handleAddProductInCart(updatedProductDetails);
            handleQuantityAndSubTotal();
          }}
          isBackgroundColor
          disabled={isLoading.addProduct || isLoading.quantityAndSubTotal}
        >
          {isLoading.addProduct || isLoading.quantityAndSubTotal ? <ActivityIndicator size="small" color={theme.colors.white} /> : "comprar"}
        </Button>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0E0F11",
    color: theme.colors.white,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginTop: 80,
    gap: 30,
  },
  productDetails: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    color: theme.colors.white,
  },
  gap25: {
    gap: 25,
  },
  gap10: {
    gap: 10,
  },
});
