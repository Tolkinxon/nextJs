import { request, gql } from 'graphql-request'

export const getPost = async () => {
    
    graphqlAPI = process.env.

  const query = gql`
    query myQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
              createdAt
            }
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
}
