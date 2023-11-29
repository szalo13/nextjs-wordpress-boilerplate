export const POST_VIEW_FRAGMENT = `
  excerpt(format: RAW)
  id
  isPreview
  isRestricted
  modified
  slug
  status
  date
  featuredImage {
    node {
      sourceUrl
    }
  }
  content
  tags {
    nodes {
      name
      slug
      uri
    }
  }
  title
  uri
  author {
    node {
      avatar {
        url
      }
      email
      firstName
      lastName
      name
      nickname
      slug
      description
    }
  }
  categories {
    nodes {
      slug
      name
    }
  }
`;
