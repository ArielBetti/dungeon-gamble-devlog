import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,

      authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

export { authLink, client, httpLink };