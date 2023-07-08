import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export default client;
