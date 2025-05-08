import * as Types from "../type.interface";

import { gql } from "@apollo/client";
export type PatientFragmentFragment = { __typename?: "Patient" } & Pick<
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

export const PatientFragmentFragmentDoc = gql`
  fragment PatientFragment on Patient {
    address
    clinic {
      address
      clinicCode
      createdAt
      description
      email
      id
      isActive
      logoUrl
      name
      phoneNumber
      provinceCode
      provinceName
      updatedAt
    }
    clinicId
    createdAt
    dateOfBirth
    email
    fullName
    fullPhoneNumber
    gender
    healthInsuranceId
    id
    isActive
    metadata {
      key
      value
    }
    phoneNumber
    phonePrefix
    updatedAt
  }
`;
