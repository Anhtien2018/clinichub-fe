import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type RemovePatientMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type RemovePatientMutationResponse = { __typename?: "Mutation" } & Pick<
  Types.Mutation,
  "removePatient"
>;

export const RemovePatientDocument = gql`
  mutation removePatient($id: ID!) {
    removePatient(id: $id)
  }
`;
export function useRemovePatientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePatientMutationResponse,
    RemovePatientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemovePatientMutationResponse,
    RemovePatientMutationVariables
  >(RemovePatientDocument, options);
}
export type RemovePatientMutationHookResult = ReturnType<
  typeof useRemovePatientMutation
>;
export type RemovePatientMutationResult =
  Apollo.MutationResult<RemovePatientMutationResponse>;
export type RemovePatientMutationOptions = Apollo.BaseMutationOptions<
  RemovePatientMutationResponse,
  RemovePatientMutationVariables
>;
