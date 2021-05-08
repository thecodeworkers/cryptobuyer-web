import { registerUser } from '@graphql'
import { actionObject } from '@utils'
import { SUBSCRIBE_USER } from './action-types'

export const subscribeUser = (email) => async (dispatch) => {
  const result = await registerUser(email)
  dispatch(actionObject(SUBSCRIBE_USER, { userSubscribe: result }))
}
