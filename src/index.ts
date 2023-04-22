import { useGraphQLModules } from "@envelop/graphql-modules";
import { PrismaClient } from "@prisma/client";
import { createApplication } from "graphql-modules";
import { createYoga } from "graphql-yoga";

import { contactModule, documentsModule, scalarModule, userModule } from "./modules";

const yoga = createYoga({
  plugins: [
    useGraphQLModules(
      createApplication({
        modules: [contactModule, documentsModule, scalarModule, userModule],
      })
    ),
  ],
  context: {
    prisma: new PrismaClient(),
  },
  cors: {
    allowedHeaders: ["Content-Type"],
    methods: ["POST"],
    origin: process.env.CORS_ORIGIN ?? "*",
  },
  graphiql: false,
  graphqlEndpoint: "/",
  landingPage: false,
});

export const viteNodeApp = yoga;
export default yoga;
