import { LOADER } from './actions-types'

export const setLoader = (show: boolean) => {

  console.log('ENTER ACTION')
  return {
    type: LOADER,
    payload: show
  }
}
