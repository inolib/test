/* eslint-disable @typescript-eslint/no-misused-promises */

import { useGraphQLModules } from "@envelop/graphql-modules";
import { PrismaClient } from "@prisma/client";
import express, { type Request, type Response } from "express";
import { createApplication } from "graphql-modules";
import { createYoga } from "graphql-yoga";

import { contactModule, documentsModule, scalarModule, userModule } from "./modules";

const makeApp = async () => {
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
    graphqlEndpoint: "/api",
    landingPage: false,
  });

  const app = express();

  app.use(yoga);

  return Promise.resolve(app);
};

const appPromise = makeApp();

export const viteNodeApp = appPromise;

export default async (request: Request, response: Response) => {
  const app = await appPromise;

  app(request, response);
};
