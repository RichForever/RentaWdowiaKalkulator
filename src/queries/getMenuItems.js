import {gql} from '@apollo/client';

export const GET_MENU_ITEMS = gql`
    query GetMenuItems {
  renderNavigation(
    navigationIdOrSlug: "main-navigation"
    type: TREE
    menuOnly: false
  ) {
    id
    title
    path
  }
}
`;