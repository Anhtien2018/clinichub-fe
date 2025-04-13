import * as Types from "../type.interface";

import { gql } from "@apollo/client";
export type UserFragmentFragment = { __typename?: "User" } & Pick<
  Types.User,
  | "createdAt"
  | "email"
  | "fullName"
  | "id"
  | "lastLoginAt"
  | "phoneNumber"
  | "phonePrefix"
  | "role"
  | "updatedAt"
>;

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    createdAt
    email
    fullName
    id
    lastLoginAt
    phoneNumber
    phonePrefix
    role
    updatedAt
  }
`;
