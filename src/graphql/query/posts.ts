const posts = `
posts {
  nodes {
    title
    id
    date
    post {
      outstanding
      title
      subtitle
      content
      image {
        mediaItemUrl
        slug
      }
    }
  }
}
`

export default posts
