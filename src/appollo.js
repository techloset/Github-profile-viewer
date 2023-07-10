import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export default client;

