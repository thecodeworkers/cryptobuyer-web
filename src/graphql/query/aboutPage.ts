import { aboutId } from '@utils/pageIds'

const about = `
  aboutPage:page(id: "${aboutId}")  {
    about {
      mainBanner {
        subtitle
        content
        title
        background {
          mediaType
          mediaItemUrl
          slug
        }
        backgroundResponsive {
          mediaItemUrl
          slug
          mediaType
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
