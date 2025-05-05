import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { ClinicFragmentFragmentDoc } from "../fragments/clinic.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ClinicsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ClinicsQueryResponse = { __typename?: "Query" } & {
  clinics: Array<
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
      }
  >;
};

export const ClinicsDocument = gql`
  query clinics {
    clinics {
      ...ClinicFragment
    }
  }
  ${ClinicFragmentFragmentDoc}
`;
export function useClinicsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClinicsQueryResponse,
    ClinicsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClinicsQueryResponse, ClinicsQueryVariables>(
    ClinicsDocument,
    options,
  );
}
export function useClinicsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClinicsQueryResponse,
    ClinicsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ClinicsQueryResponse, ClinicsQueryVariables>(
    ClinicsDocument,
    options,
  );
}
export function useClinicsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClinicsQueryResponse,
        ClinicsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ClinicsQueryResponse, ClinicsQueryVariables>(
    ClinicsDocument,
    options,
  );
}
export type ClinicsQueryHookResult = ReturnType<typeof useClinicsQuery>;
export type ClinicsLazyQueryHookResult = ReturnType<typeof useClinicsLazyQuery>;
export type ClinicsSuspenseQueryHookResult = ReturnType<
  typeof useClinicsSuspenseQuery
>;
export type ClinicsQueryResult = Apollo.QueryResult<
  ClinicsQueryResponse,
  ClinicsQueryVariables
>;
