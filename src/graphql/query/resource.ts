import { GraphQlClient, normalized } from '@utils'
import homePageQuery from './homePage'
import aboutPageQuery from './aboutPage'
import forYouQuery from './forYouPage'
import forBusinessQuery from './forBusinessPage'
import proPageQuery from './proPage'

const resource = async (resource: any) => {

  const resources = {
    'homePage': homePageQuery,
    'aboutPage': aboutPageQuery,
    'forYouPage': forYouQuery,
    'forBusinessPage': forBusinessQuery,
    'proPage': proPageQuery,
  }

  const query = `
    query Resources {
      ${resources[resource]}
    }
  `
  const result: any = await GraphQlClient(query)

  return 'nodes' in result[resource] ? normalized(result[resource].nodes) : normalized(result[resource])
}

export default resource
