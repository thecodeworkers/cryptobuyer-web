
import { resource } from '@graphql/query';
import { actionObject } from '@utils'
import { GET_PAGES } from '../page/action-types'
import { LOADER } from '../loader/actions-types'
import { setLoader } from '../loader/action'


const reduceArray = (quantity, array) => {
  let count = 0;

  const reduceFunction = (prev, next, index) => {
    if (index == 1) {
      let item = prev;
      prev = [];
      prev[0] = []
      prev[0][0] = item;
    }

    let indexArr = (count > 0) ? index - (count * 4) : index;
    prev[count][indexArr] = next;

    if ((index + 1) % quantity == 0) {
      count++;
      prev[count] = [];
    }

    return prev;
  }

  return array.reduce(reduceFunction);
}


export const getPages: any = (resources) => async (dispatch, getState) => {

  const result: any = await resource(resources)
  const { page } = getState();
  let data = page
  data[resources] = result

  if (resources == 'aboutPage') {
    let about = { ...{ about: { secondBanner: { investors: [] } } }, ...result };
    about.about.secondBanner.investors = reduceArray(4, result.about?.secondBanner?.investors);
    data[resources] = about
  }

  dispatch(actionObject(GET_PAGES, data))
}
