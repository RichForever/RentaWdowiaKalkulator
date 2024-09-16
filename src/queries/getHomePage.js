import {gql} from '@apollo/client';

export const GET_HOME_PAGE = gql`
    query getHomepage {
      homepage {
        data {
          id,
          attributes {
            sectionHeader {
              id,
              header,
              content,
              buttons {
                id,
                label,
                href,
                color
              }
            }
          }
        }
      }
    }
`;