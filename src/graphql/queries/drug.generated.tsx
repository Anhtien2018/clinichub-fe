import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { DrugFragmentFragmentDoc } from "../fragments/drug.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type DrugQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type DrugQueryResponse = { __typename?: "Query" } & {
  drug: { __typename?: "Drug" } & Pick<
    Types.Drug,
    | "baseQuantityRemainder"
    | "baseUnit"
    | "baseUnitName"
    | "code"
    | "conversionRate"
    | "costPrice"
    | "createdAt"
    | "id"
    | "ingredient"
    | "isDeleted"
    | "name"
    | "packageQuantity"
    | "packageUnit"
    | "price"
    | "quantity"
    | "stockDisplay"
    | "updatedAt"
  >;
};

export const DrugDocument = gql`
  query drug($id: ID!) {
    drug(id: $id) {
      ...DrugFragment
    }
  }
  ${DrugFragmentFragmentDoc}
`;
export function useDrugQuery(
  baseOptions: Apollo.QueryHookOptions<DrugQueryResponse, DrugQueryVariables> &
    ({ variables: DrugQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DrugQueryResponse, DrugQueryVariables>(
    DrugDocument,
    options,
  );
}
export function useDrugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DrugQueryResponse,
    DrugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DrugQueryResponse, DrugQueryVariables>(
    DrugDocument,
    options,
  );
}
export function useDrugSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<DrugQueryResponse, DrugQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<DrugQueryResponse, DrugQueryVariables>(
    DrugDocument,
    options,
  );
}
export type DrugQueryHookResult = ReturnType<typeof useDrugQuery>;
export type DrugLazyQueryHookResult = ReturnType<typeof useDrugLazyQuery>;
export type DrugSuspenseQueryHookResult = ReturnType<
  typeof useDrugSuspenseQuery
>;
export type DrugQueryResult = Apollo.QueryResult<
  DrugQueryResponse,
  DrugQueryVariables
>;
