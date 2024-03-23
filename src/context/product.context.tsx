import { PropsWithChildren, createContext, useState } from 'react';
import { ProductDetailsProps } from "../types/interfaces";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductDetailsProps[]>([
    {
      id: '1',
      name: 'Shorts Bridge Black',
      price: 289.00,
      img: 'https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Shorts_Bridge_Black.jpg',
      description: 'Nylon shorts with a modern design, featuring cutouts and colorful seams that add texture to the pieces. It has a capsule tag.',
    },
    {
      id: '2',
      name: 'Tee Tonal Logo Black',
      price: 189.00,
      img: 'https://highcompanybr.com/wp-content/uploads/2024/03/Tee_Tonal_Logo_Black.jpg',
      description: 'T-shirt made of 100% cotton. The logo is applied using screen printing on the front.',
    },
    {
      id: '3',
      name: 'Ripstop 5 Panel Logo Black',
      price: 189.00,
      img: 'https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Ripstop_5_Panel_Logo_Black.jpg',
      description: '6-panel polyamide cap with snapback closure and embroidered graphic.',
    },
    {
      id: '4',
      name: 'Sling Bag Essentials Black',
      price: 329.00,
      img: 'https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Sling_Bag_Essentials_Black.jpg',
      description: 'It features a main flap pocket, ideal for secure storage, a smaller pocket with reverse zipper for small items, and a mesh kangaroo pocket for easy access items. It also has a black rubberized label on the front.',
    },
    {
      id: '5',
      name: 'Rain Jacket Outline Logo Black',
      price: 599.00,
      img: 'https://cdn.highcompanybr.com/wp-content/uploads/2024/02/Rain_Jacket_Outline_Logo_Black.jpg',
      description: 'Water-repellent polyamide jacket with double-weave embroidered label on the pocket and outline logo embroidered on the sleeve.',
    }
  ]);

  const [productsInCart, setProductsInCart] = useState<ProductDetailsProps[]>([]);

  const subTotal = productsInCart.reduce((previousValue: number, product: ProductDetailsProps) => previousValue + product.price, 0);

  const quantity = productsInCart.length;

  const handleAddProductInCart = (product: ProductDetailsProps) => {
    const findProduct = productsInCart.find((p: ProductDetailsProps) => p.id === product.id);

    if (!findProduct) setProductsInCart([...productsInCart, product]);
  }

  const handleRemoveProductInCart = (id: string) => {
    const newProductsInCart = productsInCart.filter((p: ProductDetailsProps) => p.id !== id);

    setProductsInCart(newProductsInCart);
  }

  const ProductContextData = {
    products,
    productsInCart,
    handleAddProductInCart,
    handleRemoveProductInCart,
    subTotal,
    quantity,
  };

  return <ProductContext.Provider value={ProductContextData}>{children}</ProductContext.Provider>;
};
