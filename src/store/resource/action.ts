import { GET_RESOURCES, } from './action-types'
import { actionObject, Filter } from '../../utils'
import { GET_HOME_PAGE } from '../page/action-types'
import { resources } from '../../graphql/query'

export const getResources: any = () => async dispatch => {
  const allResources = await resources()

  dispatch(actionObject(GET_HOME_PAGE, { homePage: allResources.homePage, aboutPage: allResources.aboutPage }))
  delete allResources['homePage']

}
