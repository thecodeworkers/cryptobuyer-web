import { GraphQlClient, normalized } from '@utils'
import blogPageQuery from './blogPage'

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

const blog = async () => {

  const query = `
    query Posts {
      ${blogPageQuery}
      ${posts}
    }
  `
  const data: any = await GraphQlClient(query)

  const result = {
    'blogPage': normalized(data['blogPage']),
    'posts': normalized(data['posts'].nodes)
  }

  return result;

}

export default blog
