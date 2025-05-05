import * as Types from "../type.interface";

import { gql } from "@apollo/client";
export type UserFragmentFragment = { __typename?: "User" } & Pick<
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
              >
            >;
          }
      >
    >;
    roles?: Types.Maybe<
      Array<
        { __typename?: "Role" } & Pick<
          Types.Role,
          "createdAt" | "description" | "id" | "isActive" | "name" | "updatedAt"
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

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
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
      owner {
        avatarId
        createdAt
        email
        fullName
        id
        isActive
        lastLoginAt
        phoneNumber
        phonePrefix
        updatedAt
        userType
        username
      }
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
      permissions {
        action
        createdAt
        description
        id
        isActive
        name
        resource
        updatedAt
      }
      updatedAt
    }
    updatedAt
    userType
    username
  }
`;
