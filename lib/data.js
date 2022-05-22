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
      slug
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
    author {
        name
        slug
    }
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
            content
            tags
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

export const getPortfolios = async () => {
    const query = gql`
    {
        portfolios{
            title
            description
            tags
            slug
            coverImage {
            width
            height
            url
            }
        }
    }
    `

    return await request(END_POINT, query)
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
            slug
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

export const getGalleries = async () => {
  const query = gql`
    {
      galleries(orderBy: date_DESC) {
        id
        title
        date
        description
        photo{
          width
          height
          url
        }
      }
    }
  `
  
  return await request(END_POINT, query);
}

export const getAuthor = async (slug) => {
  const query = gql`
    query getPost($slug: String) {
      author(where: {slug: $slug}) {
        id
        name
        biography
        image {
          id
          url
          width
          height
        }
        authorGalleries {
          image {
            id
            url
            width
            height
          }
        }
      }
    }
  `
  const variables = {
        slug
    }
  
  return await request(END_POINT, query, variables);
}

export const getAuthorsPost = async (slug) => {
  const query = gql`
    query getAuthorsPost($slug: String) {
        posts(where: {
          author: {
            slug: $slug
          }
        }) {
          id
          description
          date
          slug
          author{
            name
            slug
          }
          title
          tags
        }
      }
  `
  const variables = {
        slug
    }
  
  return await request(END_POINT, query, variables);
}