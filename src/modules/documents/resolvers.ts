import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    documents: (_, args, context) => context.prisma.document.findMany(),
  },
};
