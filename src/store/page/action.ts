import { actionObject } from '@utils'
import { GET_PAGES } from '../page/action-types'

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


export const getPages: any = (resources) => async dispatch => {

  const { homePage, aboutPage } = resources

  let about = { ...{ about: { secondBanner: { investors: [] } } }, ...aboutPage };

  about.about.secondBanner.investors = reduceArray(4, aboutPage.about?.secondBanner?.investors);

  dispatch(actionObject(GET_PAGES, { homePage: homePage, aboutPage: about }))
}
