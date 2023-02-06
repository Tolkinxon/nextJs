import { request, gql } from 'graphql-request'

export const getPost = async () => {
    

  const query = gql`
 query MyQuery {
  postsConnection {
    edges {
      node {
        createdAt
        author {
          bio
          name
          id
          photo {
            url
          }
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
