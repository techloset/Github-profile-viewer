import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export default client;
