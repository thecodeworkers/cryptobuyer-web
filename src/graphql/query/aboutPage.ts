import { aboutId } from '@utils/pageIds'

const about = `
  aboutPage:page(id: "cG9zdDo3Nw==") {
    about {
      subtitle
      mainBanner {
        content
        title
        background {
          mediaType
          mediaItemUrl
          slug
        }
        coin {
          mediaType
          mediaItemUrl
          slug
        }
      }
      secondBanner {
        title1
        content1
        title2
        content2
        title3
        content3
        investors {
          imagen {
            mediaType
            mediaItemUrl
            slug
          }
        }
        team {
          name
          jobTitle
          imagen {
            mediaItemUrl
            mediaType
            slug
          }
        }
      }
    }
    title
    id
  }
`

export default about
