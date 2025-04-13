import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { UserFragmentFragmentDoc } from "../fragments/user.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQueryResponse = { __typename?: "Query" } & {
  me: { __typename?: "User" } & Pick<
    Types.User,
    | "createdAt"
    | "email"
    | "fullName"
    | "id"
    | "lastLoginAt"
    | "phoneNumber"
    | "phonePrefix"
    | "role"
    | "updatedAt"
  >;
};

export const MeDocument = gql`
  query me {
    me {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQueryResponse, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQueryResponse, MeQueryVariables>(
    MeDocument,
    options,
  );
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQueryResponse, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQueryResponse, MeQueryVariables>(
    MeDocument,
    options,
  );
}
export function useMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MeQueryResponse, MeQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeQueryResponse, MeQueryVariables>(
    MeDocument,
    options,
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<
  MeQueryResponse,
  MeQueryVariables
>;
