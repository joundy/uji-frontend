import { combineReducers } from "redux"

import examGroups from "./redux/examGroups/reducer"
import exams from "./redux/exams/reducer"
import examLog from "./redux/examLog/reducer"

export default combineReducers({
  examGroups,
  exams,
  examLog
})
