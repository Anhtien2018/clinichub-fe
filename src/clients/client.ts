import possibleTypes from "@/apollo/possibleTypes.json";
import {
  ApolloClient,
  InMemoryCache,
  type ApolloLink,
  type NormalizedCacheObject,
} from "@apollo/client";
import { type ApolloClientOptions } from "@apollo/client/core/ApolloClient";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { setContext } from "@apollo/client/link/context";

export function getApolloClientSSR(token: string) {
  const httpLink = new BatchHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_DOMAIN || ""}${process.env.NEXT_PUBLIC_API_URL || ""}`,
    // credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
    includeExtensions: true,
    batchMax: 5,
  });

  const apolloClientOptions: ApolloClientOptions<NormalizedCacheObject> = {
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: httpLink,
    cache: new InMemoryCache({ possibleTypes: possibleTypes.possibleTypes }),
  };

  if (token) {
    const contextLink: ApolloLink = setContext(
      (_, { headers }: { headers?: Record<string, string | undefined> }) => {
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          },
        };
      }
    );
    apolloClientOptions.link = contextLink.concat(httpLink);
  }

  return new ApolloClient(apolloClientOptions);
}
