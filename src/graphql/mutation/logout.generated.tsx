import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type LogoutMutationVariables = Types.Exact<{
  refreshToken: Types.Scalars["String"]["input"];
}>;

export type LogoutMutationResponse = { __typename?: "Mutation" } & Pick<
  Types.Mutation,
  "logout"
>;

export const LogoutDocument = gql`
  mutation logout($refreshToken: String!) {
    logout(refreshToken: $refreshToken)
  }
`;
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutationResponse,
    LogoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutationResponse, LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult =
  Apollo.MutationResult<LogoutMutationResponse>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutationResponse,
  LogoutMutationVariables
>;
