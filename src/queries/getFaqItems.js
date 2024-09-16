import {gql} from '@apollo/client';

export const GET_FAQ_ITEMS = gql`
query getFaqItems {
  faqs {
    data {
      id
      attributes {
        title
        content
      }
    }
  }
}
`;