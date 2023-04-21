import { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "./src/modules/**/*.gql",
  extensions: {
    codegen: {
      generates: {
        "./src/modules/": {
          preset: "graphql-modules",
          presetConfig: {
            baseTypesPath: "./types.d.ts",
            encapsulateModuleTypes: "none",
            filename: "./types.d.ts",
          },
          plugins: ["typescript", "typescript-resolvers"],
          config: {
            contextType: "../types#Context",
            mapperTypeSuffix: "Model",
            mappers: {
              ContactCategory: "@prisma/client#ContactCategory",
              ContactRequest: "@prisma/client#ContactRequest",
              Document: "@prisma/client#Document",
            },
            maybeValue: "T | null | void",
          },
        },
      },
    },
  },
};

export default config;
