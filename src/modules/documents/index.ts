import { createModule } from "graphql-modules";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { resolvers } from "./resolvers";
import typeDefs from "./typeDefs.gql";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const documentsModule = createModule({
  id: "documents",
  dirname: __dirname,
  resolvers,
  typeDefs,
});
