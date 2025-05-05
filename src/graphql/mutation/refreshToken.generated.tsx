import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type RefreshTokenMutationVariables = Types.Exact<{
  refreshTokenInput: Types.RefreshTokenInput;
}>;

export type RefreshTokenMutationResponse = { __typename?: "Mutation" } & {
  refreshToken: { __typename?: "LoginResponse" } & Pick<
    Types.LoginResponse,
    "accessToken" | "clinicId" | "refreshToken" | "role"
  >;
};

export const RefreshTokenDocument = gql`
  mutation refreshToken($refreshTokenInput: RefreshTokenInput!) {
    refreshToken(refreshTokenInput: $refreshTokenInput) {
      accessToken
      clinicId
      refreshToken
      role
    }
  }
`;
export function useRefreshTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokenMutationResponse,
    RefreshTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefreshTokenMutationResponse,
    RefreshTokenMutationVariables
  >(RefreshTokenDocument, options);
}
export type RefreshTokenMutationHookResult = ReturnType<
  typeof useRefreshTokenMutation
>;
export type RefreshTokenMutationResult =
  Apollo.MutationResult<RefreshTokenMutationResponse>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokenMutationResponse,
  RefreshTokenMutationVariables
>;
