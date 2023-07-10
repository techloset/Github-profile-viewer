import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log(process.env.REACT_APP_APPOLLO_TOKEN)
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_APPOLLO_TOKEN}`,
  },
});

export default client;

