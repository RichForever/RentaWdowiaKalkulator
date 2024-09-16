import {gql} from '@apollo/client';

export const GET_PAGE_SEO = gql`
query GetPageSeo($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
        data {
            id
            attributes {
                title
                slug
                seo {
                    meta {
                        id
                        name
                        content
                    }
                    metaTitle
                    metaDescription
                    preventIndexing
                    metaImage {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
}
`