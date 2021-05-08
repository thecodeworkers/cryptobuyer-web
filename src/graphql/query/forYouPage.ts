import { forYouId } from '@utils/pageIds'

const forYou = `
forYouPage:page(id: "${forYouId}") {
  id
  title
  for_you {
    mainBanner {
      title
      subtitle
      background {
        slug
        mediaItemUrl
      }
      backgroundResponsive {
        mediaItemUrl
        slug
        mediaType
      }
      button {
        title
        link
      }
      lowTitle
      lowSubtitle
    }
    secondBanner {
      background {
        slug
        mediaItemUrl
      }
      backgroundResponsive {
        mediaItemUrl
        slug
        mediaType
      }
      title
      subtitle
      counter
      button {
        title
        link
      }
      currencies {
        image {
          mediaItemUrl
          slug
        }
      }
    }
    thirdBanner {
      title
      subtitle
      button {
        title
        link
      }
    }
    fourthBanner {
      title
      subtitle
      button {
        title
        link
      }
    }
    customers {
      title
      subtitle
      button {
        title
        link
      }
      commerces {
        image {
          mediaItemUrl
          slug
        }
      }
    }
  }
}
`

export default forYou
