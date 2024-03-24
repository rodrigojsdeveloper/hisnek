import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ProductContextDataProps, ProductDetailsProps } from "../types/interfaces";
import axios from "axios";

export const ProductContext = createContext({} as ProductContextDataProps);

export const ProductContextProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductDetailsProps[]>([]);

  const [productsInCart, setProductsInCart] = useState<ProductDetailsProps[]>([]);

  const subTotal = productsInCart.reduce((previousValue: number, product: ProductDetailsProps) => previousValue + product.price, 0);

  const quantity = productsInCart.length;

  const handleAddProductInCart = (product: ProductDetailsProps) => {
    const findProduct = productsInCart.find((p: ProductDetailsProps) => p.id === product.id);

    if (!findProduct) setProductsInCart([...productsInCart, product]);
  };

  const handleRemoveProductInCart = (id: string) => {
    const newProductsInCart = productsInCart.filter((p: ProductDetailsProps) => p.id !== id);

    setProductsInCart(newProductsInCart);
  };

  const handleFindProductDetails = (id: string) => {
    const productDetails = products.find((product: ProductDetailsProps) => product.id === id);

    if (!productDetails) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    return productDetails;
  };

  async function fetchData() {
    const GRAPHQL_ENDPOINT = 'http://10.0.0.132:4000/graphql';

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

    axios.post(GRAPHQL_ENDPOINT, {
      query
    })
      .then(response => {
        setProducts(response.data.data.getProducts);
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação GraphQL:', error);
      });
  }

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
