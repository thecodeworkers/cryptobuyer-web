import { blogId } from '@utils/pageIds'

const blog = `
  blogPage:page(id: "${blogId}") {
    title
    subtitle
  }
`

export default blog
