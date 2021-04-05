import { proId } from '@utils/pageIds'

const pro = `
  proPage:page(id: "${proId}") {
    id
    title
    pro {
      mainBanner {
        title
        subtitle
        background {
          slug
          mediaItemUrl
        }
        button {
          title
          link
        }
        lowTitle
      }
      secondBanner {
        background {
          slug
          mediaItemUrl
        }
        title
        subtitle
        discount
      }
      thirdBanner {
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

export default pro
