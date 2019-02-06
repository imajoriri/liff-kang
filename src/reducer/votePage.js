import { ACTIONS } from "./../actions/votePage";

const initialState = {
  plan: {}, // dbに保存されているPlanモデル
  planId: "",
  rest: {},
  vote: {}, // keyをshopIdにして値をtrue。そのままDBに入れるため
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ACTIONS.FETCH_DB:
      return Object.assign({},state, {
        plan: action.plan,
        planId: action.planId,
        rest: action.rest,
        vote: action.vote,
      });
    case ACTIONS.CLICK_VOTE:
      return Object.assign({},state, {
        vote: action.vote,
      });
    default:
      return state;
  }

}
