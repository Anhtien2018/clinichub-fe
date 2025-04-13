import {
  ApolloClient,
  InMemoryCache,
  type OperationVariables,
  type DocumentNode,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_DOMAIN || ""}${process.env.NEXT_PUBLIC_API_URL || ""}`,
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

interface FetchDataOptions<TVariables extends OperationVariables> {
  query: DocumentNode; // Use DocumentNode for GraphQL queries
  variables: TVariables; // Type of variables for the query
}

export async function fetchMetaData<
  TData,
  TVariables extends OperationVariables,
>({ query, variables }: FetchDataOptions<TVariables>): Promise<TData | null> {
  try {
    const { data } = await client.query<TData, TVariables>({
      query,
      variables,
    });
    return data || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function mutateMetaData<
  TData,
  TVariables extends OperationVariables,
>({ query, variables }: FetchDataOptions<TVariables>): Promise<TData | null> {
  try {
    const { data } = await client.mutate<TData, TVariables>({
      mutation: query,
      variables,
    });
    return data || null;
  } catch (error) {
    console.error("Error mutating data:", error);
    return null;
  }
}
