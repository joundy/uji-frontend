import {
  SET_LAST_URL,
  SET_LAST_URL_BEFORE_EXAM
} from "./actions"

const initialState = {
  lastUrl: "/",
  lastUrlBeforeExam: "/"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_URL:
    return {
      ...state,
      lastUrl: action.lastUrl
    }
    case SET_LAST_URL_BEFORE_EXAM:
    return {
      ...state,
      lastUrlBeforeExam: action.lastUrlBeforeExam
    }
    default:
      return state
  }
}