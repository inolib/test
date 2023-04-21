import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    users: (_, args, context) => context.prisma.user.findMany(),
  },

  Mutation: {
    newSignUpRequest: (_, args, context) => {
      return context.prisma.user.upsert({
        where: { id: "" },
        update: {},
        create: {
          email: args.email,
          password: args.password,
        },
      });
    },
  },
};
