import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { ClinicFragmentFragmentDoc } from "../fragments/clinic.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ClinicQueryVariables = Types.Exact<{
  id: Types.Scalars["String"]["input"];
}>;

export type ClinicQueryResponse = { __typename?: "Query" } & {
  clinic: { __typename?: "ClinicEntity" } & Pick<
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
          | "email"
          | "fullName"
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
                >
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
                >
              >
            >;
          }
      >;
    };
};

export const ClinicDocument = gql`
  query clinic($id: String!) {
    clinic(id: $id) {
      ...ClinicFragment
    }
  }
  ${ClinicFragmentFragmentDoc}
`;
export function useClinicQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClinicQueryResponse,
    ClinicQueryVariables
  > &
    ({ variables: ClinicQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClinicQueryResponse, ClinicQueryVariables>(
    ClinicDocument,
    options,
  );
}
export function useClinicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClinicQueryResponse,
    ClinicQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ClinicQueryResponse, ClinicQueryVariables>(
    ClinicDocument,
    options,
  );
}
export function useClinicSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClinicQueryResponse,
        ClinicQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ClinicQueryResponse, ClinicQueryVariables>(
    ClinicDocument,
    options,
  );
}
export type ClinicQueryHookResult = ReturnType<typeof useClinicQuery>;
export type ClinicLazyQueryHookResult = ReturnType<typeof useClinicLazyQuery>;
export type ClinicSuspenseQueryHookResult = ReturnType<
  typeof useClinicSuspenseQuery
>;
export type ClinicQueryResult = Apollo.QueryResult<
  ClinicQueryResponse,
  ClinicQueryVariables
>;
