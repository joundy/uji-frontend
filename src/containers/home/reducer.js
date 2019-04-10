import { HOME_SET_FILTER, HOME_LOAD_EXAMGROUPS_SUCCESS } from "./actions"

const initialState = {
  examGroups: {
    data: [],
    count: 0
  },
  filter: {
    level: "",
    class: "",
    tag: ""
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_SET_FILTER:
    return {
      ...state,
      filter: {
        ...state.filter,
        ...action.payload
      }
    }
    case HOME_LOAD_EXAMGROUPS_SUCCESS:
    return {
      ...state,
      examGroups: action.payload
    }
    default:
      return state
  }
}