const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Dtc {
    _id: ID
    number: String
    description: String
  
  }
  type Query {
    
    dtc(code: String!): Dtc
  }

`;

module.exports = typeDefs;
