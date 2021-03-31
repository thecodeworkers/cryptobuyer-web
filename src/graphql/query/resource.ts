import { GraphQlClient, normalized } from '@utils'
import homePageQuery from './homePage'
import aboutPageQuery from './aboutPage'
import forYouQuery from './forYouPage'
import forBusinessQuery from './forBusinessPage'

const resource = async (resource: any) => {

  const resources = {
    'homePage': homePageQuery,
    'aboutPage': aboutPageQuery,
    'forYouPage': forYouQuery,
    'forBusinessPage': forBusinessQuery
  }

  const query = `
    query Resources {
      ${resources[resource]}
    }
  `
  const result: any = await GraphQlClient(query)

  return normalized(result[resource])
}

export default resource
