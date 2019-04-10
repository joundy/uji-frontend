import {
  FETCH_EXAMS_DATA,
  FETCH_EXAMS_SUCCESS,
  FETCH_EXAMS_FAILURE,
  SET_EXAMS_FILTER
} from "./actions"

const initialState = {
  payload: {
    data: [],
    count: 0
  },
  isLoading: false,
  error: {},
  filter: {
    examGroupSlug: "",
    start: 0,
    limit: 10
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMS_DATA:
    return {
      ...state,
      isLoading: true
    }
    case FETCH_EXAMS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      payload: action.payload
    }
    case FETCH_EXAMS_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    }
    case SET_EXAMS_FILTER:
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