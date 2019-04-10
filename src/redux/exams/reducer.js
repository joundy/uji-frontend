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
    case "TEST":
    return {
      ...state
    }
    default:
      return state
  }
}