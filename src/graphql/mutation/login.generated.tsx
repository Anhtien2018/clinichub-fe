import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;

export type LoginMutationResponse = { __typename?: "Mutation" } & {
  login: { __typename?: "LoginResponse" } & Pick<
    Types.LoginResponse,
    "accessToken" | "clinicId" | "refreshToken" | "role"
  >;
};

export const LoginDocument = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      clinicId
      refreshToken
      role
    }
  }
`;
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutationResponse,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutationResponse, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutationResponse>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutationResponse,
  LoginMutationVariables
>;
