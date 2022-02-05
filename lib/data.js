import request, { gql } from "graphql-request";

const END_POINT = "https://api-ap-northeast-1.graphcms.com/v2/ckz9c54g910c601wgdovxcqb6/master"

export const getPostAndPortfolios = async () => {
    const query = gql`
    {
  portfolios {
    title
    tags
    date
    description
    slug
    coverImage {
      width
      height
      url
    }
  }
  posts {
    title
    slug
    description
    date
    tags
    author {
      name
      image {
        url
        width
        height
      }
    }
  }
}
  `

  return await request(END_POINT,query);
}

export const getPosts = async () => {
    const query = gql`
    {
  posts {
    title
    slug
    description
    date
    tags
  }
}
  `

  return await request(END_POINT,query);
}

export const getPortfolio = async (slug) => {
    const query = gql`
    query getPortfolio($slug: String) {
        portfolio(where: {slug: $slug}) {
            title
            id
            description
            coverImage {
            width
            height
            url
            }
            tags
        }
    }
    `

    const variables = {
        slug
    }

    return await request(END_POINT, query, variables)
}

export const getPost = async (slug) => {
    const query = gql`
    query getPost($slug: String) {
        post(where: {slug: $slug}) {
            title
            description
            tags
            date
            content
            author{
            image{
                width
                height
                url
            }
            name
            biography
            }
        }
    }
    `

    const variables = {
        slug
    }

    return await request(END_POINT, query, variables) 
}