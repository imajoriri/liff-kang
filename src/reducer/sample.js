import { ACTIONS } from "./../actions/sample";

const initialState = {
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ACTIONS.SAMPLE:
      return Object.assign({},state, {
      });
    default:
      return state;
  }

}
