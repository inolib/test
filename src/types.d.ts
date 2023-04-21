import type { PrismaClient } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
};

export type JSON = string | number | boolean | JSON[] | JSONObject | null;

export type JSONObject = {
  [property: string]: JSON;
};
