import { gql } from '@apollo/client';

export const QUERY_DTC = gql`
query Dtc($code: String!) {
  dtc(code: $code) {
    _id
    description
    number
  }
}
`;

