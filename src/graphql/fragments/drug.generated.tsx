import * as Types from "../type.interface";

import { gql } from "@apollo/client";
export type DrugFragmentFragment = { __typename?: "Drug" } & Pick<
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

export const DrugFragmentFragmentDoc = gql`
  fragment DrugFragment on Drug {
    baseQuantityRemainder
    baseUnit
    baseUnitName
    code
    conversionRate
    costPrice
    createdAt
    id
    ingredient
    isDeleted
    name
    packageQuantity
    packageUnit
    price
    quantity
    stockDisplay
    updatedAt
  }
`;
