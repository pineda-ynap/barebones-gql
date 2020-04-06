// schema, resolvers, query ====> Server

const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type Category {
    id: ID
    slug: String
  }

  type User {
    id: ID
    name: String
    joinDate: String
  }

  type PDPListItem {
    id: ID
    img: String
    title: String
    price: String
  }

  type Query {
    navMenu: [Category]
  }
`;

const resolvers = {
  Query: {
    navMenu: () => {
      return [{ id: "1", slug: "clothing" }];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3434).then(() => console.log(`Server ready`));
