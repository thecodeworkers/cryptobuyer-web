import { GraphQlClient, normalized, normalizedArray } from '@utils';
import homePageQuery from './homePage'
import aboutPageQuery from './aboutPage'

const resources = async () => {
  const query = `
    query Resources {
      ${homePageQuery}
      ${aboutPageQuery}
    }
  `

  const data: any = await GraphQlClient(query)

  const resources = {
    homePage: normalized(data?.homePage),
    aboutPage: normalized(data?.aboutPage)
  }

  return resources
}

export default resources
