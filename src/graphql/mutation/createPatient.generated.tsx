import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { ClinicFragmentFragmentDoc } from "../fragments/clinic.generated";
import { PatientFragmentFragmentDoc } from "../fragments/patient.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CreatePatientMutationVariables = Types.Exact<{
  createPatientInput: Types.CreatePatientInput;
}>;

export type CreatePatientMutationResponse = { __typename?: "Mutation" } & {
  createPatient: { __typename?: "Patient" } & Pick<
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
      metadata?: Types.Maybe<
        { __typename?: "Metadata" } & Pick<Types.Metadata, "key" | "value">
      >;
    };
};

export const CreatePatientDocument = gql`
  mutation createPatient($createPatientInput: CreatePatientInput!) {
    createPatient(createPatientInput: $createPatientInput) {
      clinic {
        ...ClinicFragment
      }
      ...PatientFragment
    }
  }
  ${ClinicFragmentFragmentDoc}
  ${PatientFragmentFragmentDoc}
`;
export function useCreatePatientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePatientMutationResponse,
    CreatePatientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePatientMutationResponse,
    CreatePatientMutationVariables
  >(CreatePatientDocument, options);
}
export type CreatePatientMutationHookResult = ReturnType<
  typeof useCreatePatientMutation
>;
export type CreatePatientMutationResult =
  Apollo.MutationResult<CreatePatientMutationResponse>;
export type CreatePatientMutationOptions = Apollo.BaseMutationOptions<
  CreatePatientMutationResponse,
  CreatePatientMutationVariables
>;
