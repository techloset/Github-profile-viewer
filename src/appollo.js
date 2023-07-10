import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export default client;

