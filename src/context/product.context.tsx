import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ProductContextDataProps, ProductDetailsProps } from "../types/interfaces";
import axios from "axios";

export const ProductContext = createContext({} as ProductContextDataProps);

const GRAPHQL_ENDPOINT = `http://${process.env.IPV4_ADDRESS}:4000/graphql`;

const getProductQuery = `
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

const addToCartMutation = `
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

const removeToCartMutation = `
  mutation RemoveFromCart($id: ID!) {
    removeToCart(id: $id)
  }
`;

const findProductQuery = (id: string) => `
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

const quantityAndSubTotal = `
  query {
    quantity
    subTotal
  }
`;

const clearCart = `
  query ClearCart {
    clearCart {
      success
    }  
  }
`;

const handleError = (message: string, error: any) => {
  console.error(message, error);
};

const fetchData = async (query: string) => {
  try {
    const { data } = await axios.post(GRAPHQL_ENDPOINT, { query });
    return data;
  } catch (error) {
    handleError("Erro ao fazer a solicitação GraphQL:", error);
    throw error;
  }
};

export const ProductContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [products, setProducts] = useState<ProductDetailsProps[]>([]);
  const [productsInCart, setProductsInCart] = useState<ProductDetailsProps[]>([]);
  const [quantity, setQuantity] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [isLoadingAddProduct, setIsLoadingAddProduct] = useState<boolean>(false);
  const [isLoadingRemoveProduct, setIsLoadingRemoveProduct] = useState<boolean>(false);
  const [isLoadingQuantityAndSubTotal, setIsLoadingQuantityAndSubTotal] = useState<boolean>(false);

  const fetchProducts = async () => {
    const { data } = await fetchData(getProductQuery);
    setProducts(data.getProducts);
  };

  const handleAddProductInCart = async (product: ProductDetailsProps) => {
    setIsLoadingAddProduct(true);

    try {
      const { data } = await axios.post(GRAPHQL_ENDPOINT, { query: addToCartMutation, variables: { product } });
      const addedProduct = data.data.addToCart;
      setProductsInCart([addedProduct, ...productsInCart]);
    } catch (error) {
      handleError("Erro ao adicionar produto ao carrinho:", error);
    } finally {
      setIsLoadingAddProduct(false);
    }
  };

  const handleRemoveProductInCart = async (id: string) => {
    setIsLoadingRemoveProduct(true);

    try {
      await axios.post(GRAPHQL_ENDPOINT, { query: removeToCartMutation, variables: { id } });
      const newProductsInCart = productsInCart.filter((p: ProductDetailsProps) => p.id !== id);
      setProductsInCart(newProductsInCart);
    } catch (error) {
      console.error("Erro ao remover produto do carrinho:", error);
    } finally {
      setIsLoadingRemoveProduct(false);
    }
  };

  const handleFindProductDetails = async (id: string) => {
    try {
      const { data } = await fetchData(findProductQuery(id));
      const productDetails = data.findProduct;
      if (!productDetails) {
        throw new Error(`Product with ID ${id} not found.`);
      }
      return productDetails;
    } catch (error) {
      handleError("Erro ao encontrar detalhes do produto:", error);
      throw error;
    }
  };

  const handleQuantityAndSubTotal = async () => {
    setIsLoadingQuantityAndSubTotal(true);

    try {
      const { data } = await fetchData(quantityAndSubTotal);
      setQuantity(data.quantity);
      setSubTotal(data.subTotal);
    } catch (error) {
      handleError("Erro ao encontrar detalhes do produto:", error);
      throw error;
    } finally {
      setIsLoadingQuantityAndSubTotal(false);
    }
  };

  const handleClearCart = async () => {
    setIsLoadingRemoveProduct(true);

    try {
      const { data } = await fetchData(clearCart);
      if (data.clearCart.success) setProductsInCart([]);
    } catch (error) {
      handleError("Erro ao limpar carrinho de compras:", error);
      throw error;
    } finally {
      setIsLoadingRemoveProduct(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const ProductContextData: ProductContextDataProps = {
    products,
    productsInCart,
    handleAddProductInCart,
    handleRemoveProductInCart,
    subTotal,
    quantity,
    handleFindProductDetails,
    handleQuantityAndSubTotal,
    handleClearCart,
    isLoadingAddProduct,
    isLoadingRemoveProduct,
    isLoadingQuantityAndSubTotal
  };

  return <ProductContext.Provider value={ProductContextData}>{children}</ProductContext.Provider>;
};
