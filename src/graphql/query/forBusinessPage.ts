import { forBusinessId } from '@utils/pageIds'

const forBusiness = `
  forBusinessPage:page(id: ${forBusinessId}) {
    id
    title
    for_business {
      mainBanner {
        title
        subtitle
        background {
          mediaItemUrl
          slug
        }
        lowTitle
        button {
          title
          link
        }
      }
      customers {
        title
        subtitle
        commerces {
          image {
            mediaItemUrl
            slug
          }
        }
      }
      thirdBanner {
        title
        subtitle
      }
      fourthBanner {
        title
        subtitle
        button {
          title
          link
        }
      }
    }
  }
`

export default forBusiness
