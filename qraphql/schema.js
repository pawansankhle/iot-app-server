
import { QueryRootType } from 'query.root.type';

const AppSchema = new GraphQLSchema({
    query: QueryRootType
    // If you need to create or updata a datasource, 
    // you use mutations. Note:
    // mutations will not be explored in this post.
    // mutation: BlogMutationRootType 
  });
  
  module.exports = AppSchema;
