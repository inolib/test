import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    contactCategories: (_, args, context) => context.prisma.contactCategory.findMany(),
  },

  Mutation: {
    newContactRequest: (_, args, context) => {
      return context.prisma.contactRequest.upsert({
        where: { id: "" },
        update: {},
        create: {
          categoryId: args.categoryId,
          companyName: args.companyName,
          lastName: args.lastName,
          firstName: args.firstName,
          email: args.email,
          phone: args.phone,
          message: args.message,
        },
      });
    },
  },
};
