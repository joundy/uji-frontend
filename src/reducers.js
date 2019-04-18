import { combineReducers } from "redux"

import examGroups from "./redux/examGroups/reducer"
import exams from "./redux/exams/reducer"
import examLog from "./redux/examLog/reducer"
import common from "./redux/common/reducer"

export default combineReducers({
  examGroups,
  exams,
  examLog,
  common
})
