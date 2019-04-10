import {
  FETCH_EXAMGROUPS_DATA,
  FETCH_EXAMGROUPS_SUCCESS,
  FETCH_EXAMGROUPS_FAILURE
} from "./actions"

const initialState = {
  payload: {
    data: [],
    count: 0
  },
  isLoading: false,
  error: {},
  filter: {
    level: "",
    class: "",
    tag: ""
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMGROUPS_DATA:
    return {
      ...state,
      isLoading: true
    }
    case FETCH_EXAMGROUPS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      payload: action.payload
    }
    case FETCH_EXAMGROUPS_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    }
    default:
      return state
  }
}