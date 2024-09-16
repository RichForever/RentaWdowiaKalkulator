import {gql} from '@apollo/client';

export const GET_PAGE_BY_SLUG = gql`
query GetPageBySlug($slug: String!) {
  pages(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        title
        slug
        blocks {
          __typename
          ... on ComponentBlocksHero {
            id
            text
            images {
              data {
                id
                attributes {
                  url
                }
              }
            }
            header {
              id
              title
              label
            }
            buttons {
              id
              href
              label
              target
              isExternal
            }
          }
          ... on ComponentBlocksTextWithImage {
            id
            text
            image {
              data {
                attributes {
                  url
                }
              }
            }
            isInverted
            isSectionFullHeight
          }
          ... on ComponentBlocksSectionHeader {
            id
            title
            tagline
            buttons {
              id
              href
              label
              color
            }
            isSectionFullHeight
          }
          ... on ComponentBlocksCalculator {
            id
          }
          ... on ComponentBlocksFaqSection {
            id
            faqSection {
              id
              title
              text
            }
          }
        }
      }
    }
  }
}
`;
