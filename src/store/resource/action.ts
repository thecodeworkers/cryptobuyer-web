import { GET_RESOURCES } from './action-types'
import { actionObject } from '../../utils'
import { resources } from '../../graphql/query'
import { getPages } from '../page/action'

export const getResources: any = () => async dispatch => {
  const allResources = await resources()
  dispatch(getPages(allResources))
  delete allResources['homePage']

}
