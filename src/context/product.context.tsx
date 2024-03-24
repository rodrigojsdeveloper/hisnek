import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ProductContextDataProps, ProductDetailsProps } from "../types/interfaces";
import axios from "axios";
import "dotenv";

export const ProductContext = createContext({} as ProductContextDataProps);

export const ProductContextProvider = ({ children }: PropsWithChildren) => {
  const ID_IPVA4 = process.env.IPV4_ADDRESS;

  const [products, setProducts] = useState<ProductDetailsProps[]>([]);
  const [productsInCart, setProductsInCart] = useState<ProductDetailsProps[]>([]);

  const subTotal = productsInCart.reduce((previousValue: number, product: ProductDetailsProps) => previousValue + product.price, 0);
  const quantity = productsInCart.length;

  const GRAPHQL_ENDPOINT = `http://${ID_IPVA4}:4000/graphql`;

  const fetchData = async () => {
    const query = `
      query {
        getProducts {
          id
          img
          name
          price
          description
        }
      }
    `;

    try {
      const response = await axios.post(GRAPHQL_ENDPOINT, { query });
      setProducts(response.data.data.getProducts);
    } catch (error) {
      console.error('Erro ao fazer a solicitação GraphQL:', error);
    }
  };

  const handleAddProductInCart = async (product: ProductDetailsProps) => {
    console.log(product);
    const mutation = `
      mutation AddToCart($product: ProductInput!) {
        addToCart(product: $product) {
          id
          name
          price
          img
          description
        }
      }
    `;

    try {
      await axios.post(GRAPHQL_ENDPOINT, { query: mutation, variables: { product } });
      setProductsInCart([...productsInCart, product]);
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  };

  const handleRemoveProductInCart = async (id: string) => {
    const mutation = `
      mutation {
        removeToCart(id: "${id}")
      }
    `;

    try {
      await axios.post(GRAPHQL_ENDPOINT, { query: mutation });
      const newProductsInCart = productsInCart.filter((p: ProductDetailsProps) => p.id !== id);
      setProductsInCart(newProductsInCart);
    } catch (error) {
      console.error('Erro ao remover produto do carrinho:', error);
    }
  };

  const handleFindProductDetails = async (id: string) => {
    const query = `
      query {
        findProduct(id: "${id}") {
          id
          img
          name
          price
          description
        }
      }
    `;

    try {
      const response = await axios.post(GRAPHQL_ENDPOINT, { query });
      const productDetails = response.data.data.findProduct;
      if (!productDetails) {
        throw new Error(`Product with ID ${id} not found.`);
      }
      return productDetails;
    } catch (error) {
      console.error('Erro ao encontrar detalhes do produto:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ProductContextData: ProductContextDataProps = {
    products,
    productsInCart,
    handleAddProductInCart,
    handleRemoveProductInCart,
    subTotal,
    quantity,
    handleFindProductDetails,
  };

  return <ProductContext.Provider value={ProductContextData}>{children}</ProductContext.Provider>;
};
