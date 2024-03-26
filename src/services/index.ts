const { ApolloServer, gql } = require("apollo-server");
const path = require("path");
const fs = require("fs");

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
};

interface CartProduct extends Product {};

const schemaPath = path.join(__dirname, "schema.graphql");
const typeDefs = gql(fs.readFileSync(schemaPath, { encoding: "utf-8" }));

const products: Product[] = [
  {
    id: "1",
    name: "Shorts Bridge Black",
    price: 289.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Shorts_Bridge_Black.jpg",
    description: "Shorts de nylon com design moderno, apresentando recortes e costuras coloridas que adicionam textura às peças. Possui uma etiqueta cápsula.",
  },
  {
    id: "2",
    name: "Tee Tonal Logo Black",
    price: 189.00,
    img: "https://highcompanybr.com/wp-content/uploads/2024/03/Tee_Tonal_Logo_Black.jpg",
    description: "Camiseta feita de 100% algodão. O logo é aplicado através de serigrafia na parte frontal.",
  },
  {
    id: "3",
    name: "Ripstop 5 Panel Logo Black",
    price: 189.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Ripstop_5_Panel_Logo_Black.jpg",
    description: "Boné de poliamida com 6 painéis, fecho snapback e gráfico bordado.",
  },
  {
    id: "4",
    name: "Sling Bag Essentials Black",
    price: 329.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Sling_Bag_Essentials_Black.jpg",
    description: "Possui um bolso principal com aba, ideal para armazenamento seguro, um bolso menor com zíper reverso para itens pequenos, e um bolso canguru de malha para acesso fácil a itens. Também possui uma etiqueta de borracha preta na frente.",
  },
  {
    id: "5",
    name: "Rain Jacket Outline Logo Black",
    price: 599.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/02/Rain_Jacket_Outline_Logo_Black.jpg",
    description: "Jaqueta de poliamida repelente à água com etiqueta bordada em dupla trama no bolso e logo outline bordado na manga.",
  },
  {
    id: "6",
    name: "Tote Bag Outline Logo Mesh Black",
    price: 339.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Tote_Bag_Outline_Logo_Mesh_Black.jpg",
    description: "Bolsa tote feita de nylon resistente, ideal para uso diário. Possui logo outline em serigrafia à base d'água, garantindo durabilidade e estilo. Com tela emborrachada, a peça se destaca pela sua resistência e design.",
  },
  {
    id: "7",
    name: "Tee Engine Night Green",
    price: 189.00,
    img: "https://highcompanybr.com/wp-content/uploads/2024/02/Tee_Engine_NightGreen_Back.jpg",
    description: "Camiseta 100% algodão, estampa em serigrafia na frente.",
  },
  {
    id: "8",
    name: "Sticker Pack",
    price: 19.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Sticker_D2_2024.jpg",
    description: "Pack com adesivos sortidos.",
  },
  {
    id: "9",
    name: "Longsleeve Tonal Logo White",
    price: 199.00,
    img: "https://highcompanybr.com/wp-content/uploads/2024/03/Longsleeve_Tonal_Logo_White.jpg",
    description: "Camiseta manga longa feita 100% de algodão. O logotipo é aplicado com serigrafia na parte da frente.",
  },
  {
    id: "10",
    name: "Tee Striker Night Green",
    price: 189.00,
    img: "https://highcompanybr.com/wp-content/uploads/2024/02/Tee_Striker_NightGreen.jpg",
    description: "Camiseta 100% algodão, estampa em serigrafia na frente.",
  },
  {
    id: "11",
    name: "5 Panel Flags Black",
    price: 189.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/01/5_Panel_Flags_Black.jpg",
    description: "Boné 5 Panel de piquet 100% algodão personalizado com bandeiras na lateral em transfer.",
  },
  {
    id: "12",
    name: "Longsleeve Tonal Logo White",
    price: 389.00,
    img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/01/Ouffle_Bag_HighXNautica_Navy.jpg",
    description: "Mala de poliamida com recortes laterais sublimados, gráficos bordados e fitas personalizadas costuradas. A base da mala é de tecido emborrachado e possui suporte para skate.",
  },
];

let productsInCart: CartProduct[] = [];

const resolvers = {
  Query: {
    getProducts: (): Product[] => products,
    getCartProducts: (): CartProduct[] => productsInCart,
    findProduct: (parent: any, { id }: { id: string }): Product | undefined => products.find(product => product.id === id),
    quantity: (): number => productsInCart.length,
    subTotal: (): number => productsInCart.reduce((previousValue, product) => previousValue + product.price, 0),
    clearCart: (): { success: boolean } => {
      productsInCart = [];
      return { success: true };
    },
  },
  Mutation: {
    addToCart: (parent: any, { product }: { product: CartProduct }): CartProduct => {
      productsInCart.push(product);
      return product;
    },
    removeToCart: (parent: any, { id }: { id: string }): string | undefined => {
      const index = productsInCart.findIndex(product => product.id === id);
      if (index !== -1) {
        const removedProduct = productsInCart.splice(index, 1)[0];
        return removedProduct.id;
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`Servidor GraphQL pronto em ${url}`);
});
