import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Product } from "@/components/product";
import { Header } from "@/components/header";
import { ProductContext } from "@/context/product.context";
import { HomeScreenProps } from "@/types/interfaces";
import { StatusBar } from "expo-status-bar";

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { products } = useContext(ProductContext);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#0E0F11" style="light" />
      <View style={styles.container}>
        <Header />
        <FlatList
          contentContainerStyle={styles.scrollView}
          data={products}
          renderItem={({ item }) => (
            <Product navigation={navigation} product={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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
    paddingTop: 25,
  },
  scrollView: {
    gap: 10,
    marginTop: 80,
    paddingBottom: 95,
    paddingHorizontal: 15,
  },
});
