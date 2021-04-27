const post = (id) => `
post(id: "${id}"){
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
`

export default post
