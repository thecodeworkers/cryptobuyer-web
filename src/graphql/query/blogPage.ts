import { blogId } from '@utils/pageIds'

const blog = `
  blogPage:page(id: "${blogId}") {
    blog {
      title
      subtitle
    }
  }
`

export default blog
