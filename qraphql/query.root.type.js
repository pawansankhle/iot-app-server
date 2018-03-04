import { AuthorType } from 'user.type';


const QueryRootType = new GraphQLObjectType({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Root",
    fields: () => ({
      authors: {
        type: new GraphQLList(AuthorType),
        description: "List of all Authors",
        resolve: function() {
          return Authors
        }
      }
    })
  });


  exports.module = QueryRootType;