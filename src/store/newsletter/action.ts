import { registerUser } from '@graphql'
import { actionObject } from '@utils'
import { SUBSCRIBE_USER } from './action-types'

export const subscribeUser = () => async (dispatch) => {
  const result = await registerUser('email@email.com')

  console.log(result);

  dispatch(actionObject(SUBSCRIBE_USER, { userSubscribe: result }))
}
