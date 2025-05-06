import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { UserFragmentFragmentDoc } from "../fragments/user.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQueryResponse = { __typename?: "Query" } & {
  me: { __typename?: "User" } & Pick<
    Types.User,
    | "avatarId"
    | "createdAt"
    | "currentClinicId"
    | "email"
    | "fullName"
    | "fullPhoneNumber"
    | "id"
    | "isActive"
    | "lastLoginAt"
    | "phoneNumber"
    | "phonePrefix"
    | "updatedAt"
    | "userType"
    | "username"
  > & {
      clinics?: Types.Maybe<
        Array<
          { __typename?: "ClinicEntity" } & Pick<
            Types.ClinicEntity,
            | "address"
            | "clinicCode"
            | "createdAt"
            | "description"
            | "email"
            | "id"
            | "isActive"
            | "logoUrl"
            | "name"
            | "phoneNumber"
            | "provinceCode"
            | "provinceName"
            | "updatedAt"
          > & {
              owner?: Types.Maybe<
                { __typename?: "User" } & Pick<
                  Types.User,
                  | "avatarId"
                  | "createdAt"
                  | "currentClinicId"
                  | "email"
                  | "fullName"
                  | "fullPhoneNumber"
                  | "id"
                  | "isActive"
                  | "lastLoginAt"
                  | "phoneNumber"
                  | "phonePrefix"
                  | "updatedAt"
                  | "userType"
                  | "username"
                >
              >;
            }
        >
      >;
      roles?: Types.Maybe<
        Array<
          { __typename?: "Role" } & Pick<
            Types.Role,
            | "createdAt"
            | "description"
            | "id"
            | "isActive"
            | "name"
            | "updatedAt"
          > & {
              permissions?: Types.Maybe<
                Array<
                  { __typename?: "Permission" } & Pick<
                    Types.Permission,
                    | "action"
                    | "createdAt"
                    | "description"
                    | "id"
                    | "isActive"
                    | "name"
                    | "resource"
                    | "updatedAt"
                  >
                >
              >;
            }
        >
      >;
    };
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
