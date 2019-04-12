import {
  GETBYIDANDSTART_EXAMLOG_DATA,
  GETBYIDANDSTART_EXAMLOG_SUCCESS,
  GETBYIDANDSTART_EXAMLOG_FAILURE
} from "./actions"

const initialState = {
  payload: {
    questions: []
  },
  isLoading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBYIDANDSTART_EXAMLOG_DATA:
    return {
      ...state,
      isLoading: true
    }
    case GETBYIDANDSTART_EXAMLOG_SUCCESS:
    return {
      ...state,
      isLoading: false,
      payload: action.payload
    }
    case GETBYIDANDSTART_EXAMLOG_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    }
    default:
      return state
  }
}