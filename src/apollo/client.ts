import {
  RefreshTokenDocument,
  type RefreshTokenMutationResponse,
  type RefreshTokenMutationVariables,
} from "@/graphql/mutations/refreshToken.generated";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/helpers/constants";
import {
  ApolloClient,
  from,
  fromPromise,
  HttpLink,
  InMemoryCache,
  split,
  type NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { type Observable } from "@apollo/client/utilities";
import Cookies from "js-cookie";

import { mutateMetaData } from "@/hooks/UseMetaData";

export const getNewToken = async (): Promise<string> => {
  const refreshToken = Cookies.get(REFRESH_TOKEN_KEY) || "";
  if (!refreshToken) return "";

  try {
    const data = await mutateMetaData<
      RefreshTokenMutationResponse,
      RefreshTokenMutationVariables
    >({
      query: RefreshTokenDocument,
      variables: {
        refreshTokenInput: {
          refreshToken,
        },
      },
    });
    const newAccessToken = data?.refreshToken?.accessToken;
    const newRefreshToken = data?.refreshToken?.refreshToken;
    if (newAccessToken && newRefreshToken) {
      Cookies.set(TOKEN_KEY, newAccessToken, { expires: 7 });
      Cookies.set(REFRESH_TOKEN_KEY, newRefreshToken, { expires: 7 });
      return newAccessToken;
    }
  } catch (err) {
    Cookies.remove(REFRESH_TOKEN_KEY);
    Cookies.remove(TOKEN_KEY);
    console.error("Failed to refresh token:", err);
  }

  return "";
};

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  // const useNewToken = async () => {
  //   const [refreshToken, { data, error }] = useRefreshTokenMutation();
  //   console.log(refreshToken);

  //   if (error !== undefined) {
  //     return '';
  //   }
  //   return data?.refreshToken;
  // };

  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_DOMAIN || ""}${process.env.NEXT_PUBLIC_API_URL || ""}`,
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // console.log('graphQLErrors', graphQLErrors);
    // console.log('networkError', networkError);
    if (graphQLErrors) {
      const { extensions } = graphQLErrors[0];
      // graphQLErrors.forEach(({ message, locations, path }) => {
      //   // console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      //   // Điều hướng tùy vào lỗi
      //   if (message.includes('FORBIDDEN')) {
      //     Cookies.remove(TOKEN_KEY);
      //     Cookies.remove(REFRESH_TOKEN_KEY);
      //     // window.location.href = paths.auth.signIn; // Điều hướng đến trang login
      //     const setOpen = storeModalAuth.getState().setOpen; // Dùng `getState`
      //     setOpen(true); // Mở modal
      //   }
      // });

      switch (extensions?.code) {
        case "FORBIDDEN":
        case "UNAUTHENTICATED":
        case "invalid_token":
          // error code is set to UNAUTHENTICATED
          // when AuthenticationError thrown in resolver
          let forward$: Observable<any>;
          let isRefreshing = false;
          let pendingRequests: (() => void)[] = [];
          const resolvePendingRequests = (): void => {
            pendingRequests.map((callback) => callback());
            pendingRequests = [];
          };
          if (!isRefreshing) {
            isRefreshing = true;
            forward$ = fromPromise(
              getNewToken()
                .then((accessToken) => {
                  const oldHeaders = operation.getContext().headers;
                  operation.setContext(() => {
                    return {
                      headers: {
                        ...oldHeaders,
                        authorization: accessToken
                          ? `Bearer ${accessToken}`
                          : "",
                      },
                    };
                  });
                  // Store the new tokens for your auth link
                  resolvePendingRequests();
                  return accessToken;
                })
                .catch((error) => {
                  console.log(error);

                  pendingRequests = [];
                })
                .finally(() => {
                  isRefreshing = false;
                })
            );
          } else {
            // Will only emit once the Promise is resolved
            forward$ = fromPromise(
              new Promise((resolve) => {
                pendingRequests.push(() => {
                  resolve(true);
                });
              })
            );
          }
          return forward$.flatMap(() => forward(operation));
      }
    }
  });

  const splitLink = split(() => {
    return true;
  }, httpLink);

  const authLink = setContext(
    (_, { headers }: { headers?: Record<string, string | undefined> }) => {
      const token = Cookies.get(TOKEN_KEY) || "";

      if (token === "") {
        return {
          headers: {
            ...headers,
          },
        };
      }
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    }
  );

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // link: authLink.concat(httpLink),
    link: from([authLink, splitLink, errorLink]),
    cache: new InMemoryCache(),
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
}
