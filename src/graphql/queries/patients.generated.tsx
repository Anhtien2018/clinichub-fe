import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { PatientFragmentFragmentDoc } from "../fragments/patient.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PatientsQueryVariables = Types.Exact<{
  clinicId?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  pagination?: Types.InputMaybe<Types.PaginationInput>;
}>;

export type PatientsQueryResponse = { __typename?: "Query" } & {
  patients: { __typename?: "PaginatedPatients" } & {
    items?: Types.Maybe<
      Array<
        { __typename?: "Patient" } & Pick<
          Types.Patient,
          | "address"
          | "clinicId"
          | "createdAt"
          | "dateOfBirth"
          | "email"
          | "fullName"
          | "fullPhoneNumber"
          | "gender"
          | "healthInsuranceId"
          | "id"
          | "isActive"
          | "phoneNumber"
          | "phonePrefix"
          | "updatedAt"
        > & {
            clinic?: Types.Maybe<
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
            >;
            metadata?: Types.Maybe<
              { __typename?: "Metadata" } & Pick<
                Types.Metadata,
                "key" | "value"
              >
            >;
          }
      >
    >;
    pageInfo: { __typename?: "PageInfo" } & Pick<
      Types.PageInfo,
      "currentPage" | "hasNextPage" | "hasPreviousPage" | "total" | "totalPages"
    >;
  };
};

export const PatientsDocument = gql`
  query patients($clinicId: String, $pagination: PaginationInput) {
    patients(clinicId: $clinicId, pagination: $pagination) {
      items {
        ...PatientFragment
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        total
        totalPages
      }
    }
  }
  ${PatientFragmentFragmentDoc}
`;
export function usePatientsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PatientsQueryResponse,
    PatientsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PatientsQueryResponse, PatientsQueryVariables>(
    PatientsDocument,
    options,
  );
}
export function usePatientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PatientsQueryResponse,
    PatientsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PatientsQueryResponse, PatientsQueryVariables>(
    PatientsDocument,
    options,
  );
}
export function usePatientsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PatientsQueryResponse,
        PatientsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PatientsQueryResponse, PatientsQueryVariables>(
    PatientsDocument,
    options,
  );
}
export type PatientsQueryHookResult = ReturnType<typeof usePatientsQuery>;
export type PatientsLazyQueryHookResult = ReturnType<
  typeof usePatientsLazyQuery
>;
export type PatientsSuspenseQueryHookResult = ReturnType<
  typeof usePatientsSuspenseQuery
>;
export type PatientsQueryResult = Apollo.QueryResult<
  PatientsQueryResponse,
  PatientsQueryVariables
>;
