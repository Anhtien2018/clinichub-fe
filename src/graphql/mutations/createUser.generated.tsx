import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { UserFragmentFragmentDoc } from "../fragments/user.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CreateUserMutationVariables = Types.Exact<{
  input: Types.CreateUserDto;
}>;

export type CreateUserMutationResponse = { __typename?: "Mutation" } & {
  createUser: { __typename?: "User" } & Pick<
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
};

export const CreateUserDocument = gql`
  mutation createUser($input: CreateUserDto!) {
    createUser(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutationResponse,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserMutationResponse,
    CreateUserMutationVariables
  >(CreateUserDocument, options);
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutationResponse>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutationResponse,
  CreateUserMutationVariables
>;
