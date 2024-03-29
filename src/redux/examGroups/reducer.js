import {
  FETCH_EXAMGROUPS_DATA,
  FETCH_EXAMGROUPS_SUCCESS,
  FETCH_EXAMGROUPS_FAILURE,
  SET_EXAMGROUPS_FILTER
} from "./actions"

const initialState = {
  payload: {
    data: [],
    count: 0
  },
  isLoading: false,
  error: null,
  filter: {
    level: "",
    class: "",
    tag: "",
    start: 0,
    limit: 100
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMGROUPS_DATA:
    return {
      ...state,
      isLoading: true,
      error: null
    }
    case FETCH_EXAMGROUPS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      payload: action.payload,
      error: null
    }
    case FETCH_EXAMGROUPS_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    }
    case SET_EXAMGROUPS_FILTER:
    return {
      ...state,
      filter: {
        ...state.filter,
        ...action.filter
      }
    }
    default:
      return state
  }
}