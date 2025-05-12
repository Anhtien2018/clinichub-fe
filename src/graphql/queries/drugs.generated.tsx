import * as Types from "../type.interface";

import { gql } from "@apollo/client";
import { DrugFragmentFragmentDoc } from "../fragments/drug.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type DrugsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.DrugFilterInput>;
}>;

export type DrugsQueryResponse = { __typename?: "Query" } & {
  drugs: { __typename?: "PaginatedDrugs" } & {
    items?: Types.Maybe<
      Array<
        { __typename?: "Drug" } & Pick<
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
        >
      >
    >;
    pageInfo: { __typename?: "PageInfo" } & Pick<
      Types.PageInfo,
      "currentPage" | "hasNextPage" | "hasPreviousPage" | "total" | "totalPages"
    >;
  };
};

export const DrugsDocument = gql`
  query drugs($filter: DrugFilterInput) {
    drugs(filter: $filter) {
      items {
        ...DrugFragment
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        total
        totalPages
      }
    }
  }
  ${DrugFragmentFragmentDoc}
`;
export function useDrugsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DrugsQueryResponse,
    DrugsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DrugsQueryResponse, DrugsQueryVariables>(
    DrugsDocument,
    options,
  );
}
export function useDrugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DrugsQueryResponse,
    DrugsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DrugsQueryResponse, DrugsQueryVariables>(
    DrugsDocument,
    options,
  );
}
export function useDrugsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<DrugsQueryResponse, DrugsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<DrugsQueryResponse, DrugsQueryVariables>(
    DrugsDocument,
    options,
  );
}
export type DrugsQueryHookResult = ReturnType<typeof useDrugsQuery>;
export type DrugsLazyQueryHookResult = ReturnType<typeof useDrugsLazyQuery>;
export type DrugsSuspenseQueryHookResult = ReturnType<
  typeof useDrugsSuspenseQuery
>;
export type DrugsQueryResult = Apollo.QueryResult<
  DrugsQueryResponse,
  DrugsQueryVariables
>;
