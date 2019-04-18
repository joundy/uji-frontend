import {
  SET_LAST_URL,
} from "./actions"

const initialState = {
  lastUrl: "/"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_URL:
    return {
      ...state,
      lastUrl: action.lastUrl
    }
    default:
      return state
  }
}