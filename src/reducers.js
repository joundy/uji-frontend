import { combineReducers } from "redux"

import examGroups from "./redux/examGroups/reducer"
import exams from "./redux/exams/reducer"

export default combineReducers({
  examGroups,
  exams
})
