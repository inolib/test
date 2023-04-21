import { typeDefs } from "graphql-scalars";
import { writeFileSync } from "node:fs";

try {
  writeFileSync("./src/modules/scalars/typeDefs.gql", typeDefs.join("\n"));
} catch (error) {
  console.error(error);
}
