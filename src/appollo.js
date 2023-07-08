import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql/user',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export default client;
