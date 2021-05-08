
import { resource } from '@graphql/query'
import { actionObject } from '@utils'
import { GET_PAGES } from '../page/action-types'

const reduceArray = (quantity, array) => {
  let count = 0

  const reduceFunction = (prev, next, index) => {

    let indexArr = (count > 0) ? index - (count * 4) : index
    prev[count][indexArr] = next

    if ((index + 1) % quantity == 0) {
      count++
      if (index + 1 != array.length) prev[count] = []
    }

    return prev
  }

  return array.reduce(reduceFunction, [[]])
}

const setResources = (data, page, resources) => {
  switch (resources) {
    case 'aboutPage':
      page.about.secondBanner.investors = reduceArray(4, page.about?.secondBanner?.investors);
      console.log(page.about.secondBanner.investors)
      break;
    case 'forYouPage':
      page.for_you.customers.commerces = reduceArray(4, page.for_you?.customers?.commerces);
      break;
  }
  data[resources] = page
  return data;
}


export const getPages: any = (resources) => async (dispatch, getState) => {

  const result: any = await resource(resources)
  const { page } = getState()
  let data = page
  data = setResources(data, result, resources);
  dispatch(actionObject(GET_PAGES, data))
}
