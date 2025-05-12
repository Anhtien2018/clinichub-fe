import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { PatientFragmentFragmentDoc } from "../fragments/patient.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UpdatePatientMutationVariables = Types.Exact<{
  updatePatientInput: Types.UpdatePatientInput;
}>;

export type UpdatePatientMutationResponse = { __typename?: "Mutation" } & {
  updatePatient: { __typename?: "Patient" } & Pick<
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

export const UpdatePatientDocument = gql`
  mutation updatePatient($updatePatientInput: UpdatePatientInput!) {
    updatePatient(updatePatientInput: $updatePatientInput) {
      ...PatientFragment
    }
  }
  ${PatientFragmentFragmentDoc}
`;
export function useUpdatePatientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePatientMutationResponse,
    UpdatePatientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePatientMutationResponse,
    UpdatePatientMutationVariables
  >(UpdatePatientDocument, options);
}
export type UpdatePatientMutationHookResult = ReturnType<
  typeof useUpdatePatientMutation
>;
export type UpdatePatientMutationResult =
  Apollo.MutationResult<UpdatePatientMutationResponse>;
export type UpdatePatientMutationOptions = Apollo.BaseMutationOptions<
  UpdatePatientMutationResponse,
  UpdatePatientMutationVariables
>;
