import { ACTIONS } from "./../actions/votePage";

const initialState = {
  plan: {}, // dbに保存されているPlanモデル
  rest: {},
  vote: {}, // keyをshopIdにして値をtrue。そのままDBに入れるため
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ACTIONS.FETCH_PLAN_MODEL:
      return Object.assign({},state, {
        plan: action.plan,
        rest: action.rest
      });
    case ACTIONS.CLICK_VOTE:
      return Object.assign({},state, {
        vote: action.vote,
      });
    default:
      return state;
  }

}
