import { PropsWithChildren, createContext, useState } from 'react';
import { ProductDetailsProps } from "../types/interfaces";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductDetailsProps[]>([
    {
      id: '1',
      name: 'Camiseta Branca Lisa',
      price: 29.99,
      img: 'https://example.com/camiseta-branca-lisa.jpg',
      description: 'Camiseta básica na cor branca, ideal para o dia a dia. Feita com material confortável e de qualidade.',
    },
    {
      id: '2',
      name: 'Calça Jeans Skinny',
      price: 49.99,
      img: 'https://example.com/calca-jeans-skinny.jpg',
      description: 'Calça jeans estilo skinny, perfeita para um visual moderno e elegante. Confeccionada com tecido resistente e flexível.',
    },
    {
      id: '3',
      name: 'Vestido Floral',
      price: 39.99,
      img: 'https://example.com/vestido-floral.jpg',
      description: 'Vestido estampado com padrão floral, ótimo para ocasiões casuais. Possui caimento leve e confortável.',
    },
    {
      id: '4',
      name: 'Moletom Cinza Mescla',
      price: 59.99,
      img: 'https://example.com/moletom-cinza-mescla.jpg',
      description: 'Moletom na cor cinza mescla, ideal para os dias mais frios. Possui capuz ajustável e bolso canguru.',
    },
    {
      id: '5',
      name: 'Blusa de Tricot',
      price: 34.99,
      img: 'https://example.com/blusa-tricot.jpg',
      description: 'Blusa de tricot com detalhes em renda, perfeita para compor looks elegantes e sofisticados.',
    }
  ]);

  const ProductContextData = {
    products,
  };

  return <ProductContext.Provider value={ProductContextData}>{children}</ProductContext.Provider>;
};
