import {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
  } from 'graphql';

  const UserType = new GraphQLObjectType({
    name: "User",
    description: "This represent an user",
    fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLString)},
      name: {type: new GraphQLNonNull(GraphQLString)},
    })
  });

  module.exports = UserType;