import { homeId } from '@utils/pageIds'

const home = `
  homePage:page(id: "${homeId}") {
    home {
      allies {
        image {
          mediaType
          mediaItemUrl
          slug
        }
      }
      counter {
        count
        title
      }
      mainBanner {
        background {
          slug
          mediaType
          mediaItemUrl
        }
        button {
          link
          title
        }
        subtitle
        title
      }
      patnership {
        image {
          mediaType
          mediaItemUrl
          slug
        }
      }
      publicityBanner {
        title
        subtitle
        publicityImage {
          mediaItemUrl
          mediaType
          slug
        }
      }
      secondBanner {
        subtitle
        title
        button {
          link
          title
        }
      }
      thirdBanner {
        background {
          mediaType
          mediaItemUrl
          slug
        }
        subtitle
        title
        button {
          link
          title
        }
      }
    }
    title
    id
  }
`

export default home
