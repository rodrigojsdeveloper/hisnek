const { ApolloServer, gql } = require('apollo-server');

// Definindo o esquema GraphQL
const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    img: String!
    description: String!
  }

  type Query {
    products: [Product]!
  }
`;

// Dados falsos de exemplo
const productsData = [{
  id: "1",
  name: "Shorts Bridge Black",
  price: 289.00,
  img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Shorts_Bridge_Black.jpg",
  description: "Nylon shorts with a modern design, featuring cutouts and colorful seams that add texture to the pieces. It has a capsule tag.",
},
{
  id: "2",
  name: "Tee Tonal Logo Black",
  price: 189.00,
  img: "https://highcompanybr.com/wp-content/uploads/2024/03/Tee_Tonal_Logo_Black.jpg",
  description: "T-shirt made of 100% cotton. The logo is applied using screen printing on the front.",
},
{
  id: "3",
  name: "Ripstop 5 Panel Logo Black",
  price: 189.00,
  img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Ripstop_5_Panel_Logo_Black.jpg",
  description: "6-panel polyamide cap with snapback closure and embroidered graphic.",
},
{
  id: "4",
  name: "Sling Bag Essentials Black",
  price: 329.00,
  img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/03/Sling_Bag_Essentials_Black.jpg",
  description: "It features a main flap pocket, ideal for secure storage, a smaller pocket with reverse zipper for small items, and a mesh kangaroo pocket for easy access items. It also has a black rubberized label on the front.",
},
{
  id: "5",
  name: "Rain Jacket Outline Logo Black",
  price: 599.00,
  img: "https://cdn.highcompanybr.com/wp-content/uploads/2024/02/Rain_Jacket_Outline_Logo_Black.jpg",
  description: "Water-repellent polyamide jacket with double-weave embroidered label on the pocket and outline logo embroidered on the sleeve.",
}];

// Resolvedores para as consultas
const resolvers = {
  Query: {
    products: () => productsData,
  },
};

// Criando o servidor Apollo GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciando o servidor
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL pronto em ${url}`);
});
