import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { PatientFragmentFragmentDoc } from "../fragments/patient.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PatientQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type PatientQueryResponse = { __typename?: "Query" } & {
  patient: { __typename?: "Patient" } & Pick<
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
        { __typename?: "Metadata" } & Pick<Types.Metadata, "key" | "value">
      >;
    };
};

export const PatientDocument = gql`
  query patient($id: ID!) {
    patient(id: $id) {
      ...PatientFragment
    }
  }
  ${PatientFragmentFragmentDoc}
`;
export function usePatientQuery(
  baseOptions: Apollo.QueryHookOptions<
    PatientQueryResponse,
    PatientQueryVariables
  > &
    ({ variables: PatientQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PatientQueryResponse, PatientQueryVariables>(
    PatientDocument,
    options,
  );
}
export function usePatientLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PatientQueryResponse,
    PatientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PatientQueryResponse, PatientQueryVariables>(
    PatientDocument,
    options,
  );
}
export function usePatientSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PatientQueryResponse,
        PatientQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PatientQueryResponse, PatientQueryVariables>(
    PatientDocument,
    options,
  );
}
export type PatientQueryHookResult = ReturnType<typeof usePatientQuery>;
export type PatientLazyQueryHookResult = ReturnType<typeof usePatientLazyQuery>;
export type PatientSuspenseQueryHookResult = ReturnType<
  typeof usePatientSuspenseQuery
>;
export type PatientQueryResult = Apollo.QueryResult<
  PatientQueryResponse,
  PatientQueryVariables
>;
