// require("react-scripts/config/env");
module.exports = {
  overwrite: true,
  schema: "https://xxx.staging.clinichub.us/graphql",
  generates: {
    "schema/schema.json": {
      plugins: ["introspection"],
      config: {
        minify: false,
      },
    },
    "schema/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/apollo/possibleTypes.json": {
      plugins: ["fragment-matcher"],
    },
  },
  config: {
    namingConvention: "keep",
    apolloClientVersion: 3,
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};
