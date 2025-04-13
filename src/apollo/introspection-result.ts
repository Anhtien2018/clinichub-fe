export interface PossibleTypesResultData {
  possibleTypes: Record<string, string[]>;
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Node: ['Category', 'User', 'Media'],
  },
};
export default result;
