import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductContext } from "../context/product.context";
import { ProductInCart } from "../components/productInCart";
import { StatusBar } from "expo-status-bar";
import { Button } from "../components/button";
import { Price } from "../components/price";

export const CartScreen = () => {
  const { productsInCart, subTotal, quantity, handleClearCart, handleQuantityAndSubTotal, isLoadingRemoveProduct, isLoadingQuantityAndSubTotal } = useContext(ProductContext);

  const nav = useNavigation();

  const handleHome = () => {
    nav.navigate("Home" as never);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#0E0F11" style="light" />
      <View style={styles.container}>
        <Text style={styles.cartTitle}>Carrinho</Text>
        {isLoadingRemoveProduct || isLoadingQuantityAndSubTotal ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            style={styles.cart}
            data={productsInCart}
            renderItem={({ item }) => <ProductInCart product={item} />}
            ListEmptyComponent={<Text style={styles.emptyMessage}>Seu carrinho está vazio.</Text>}
            ListFooterComponent={
              productsInCart.length > 0 ? (
                <View style={styles.viewQuantity}>
                  <View style={styles.content}>
                    <Text style={styles.label}>Quantidade: </Text>
                    <Text style={styles.value}>{quantity}</Text>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.label}>SubTotal: </Text>
                    <Price price={subTotal} isDarkGray />
                  </View>
                </View>
              ) : (
                <></>
              )
            }
          />
        )}

        <View style={styles.containerButtons}>
          {productsInCart.length > 0 && (
            <Button 
              onPress={() => {
                handleClearCart();
                handleQuantityAndSubTotal();
              }}
              disabled={isLoadingRemoveProduct || isLoadingQuantityAndSubTotal}
            >
              limpar carrinho
            </Button>
          )}
          <Button onPress={handleHome} isBackgroundColor>
            retornar para a loja
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0E0F11",
    color: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 15,
    gap: 30,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
  },
  cart: {
    flex: 1,
    backgroundColor: "#202224",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
  },
  emptyMessage: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: "#fff",
    padding: 15,
  },
  viewQuantity: {
    padding: 10,
    gap: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#fff",
  },
  value: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    color: "#7C7C8A",
  },
  containerButtons: {
    gap: 10,
  },
});
