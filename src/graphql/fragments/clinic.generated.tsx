import * as Types from "../type.interface";

import { gql } from "@apollo/client";
export type ClinicFragmentFragment = { __typename?: "ClinicEntity" } & Pick<
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

export const ClinicFragmentFragmentDoc = gql`
  fragment ClinicFragment on ClinicEntity {
    address
    clinicCode
    createdAt
    description
    email
    id
    isActive
    logoUrl
    name
    owner {
      avatarId
      clinics {
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
      createdAt
      email
      fullName
      id
      isActive
      lastLoginAt
      phoneNumber
      phonePrefix
      roles {
        createdAt
        description
        id
        isActive
        name
        updatedAt
      }
      updatedAt
      userType
      username
    }
    phoneNumber
    provinceCode
    provinceName
    updatedAt
  }
`;
