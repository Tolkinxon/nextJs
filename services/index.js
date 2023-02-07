import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

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

  return result.postsConnection.edges
}

const getResentPosts = async () => {
  const query = gql`
  query getPostDetails() {
  posts(
    orderBy: createdAt_ASC
    last: 3
  ){
    title
    featuredImage{
      url
    }
    createdAt
    slug
  }
}
`
  const result = await request(graphqlAPI, query)

  return result.posts
}

const getSimilarPosts = async () => {
  const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND {categories_some: {slug_in: $categories}}}
      last: 3
      )
    }
  `
}
