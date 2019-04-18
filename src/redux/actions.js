import examGroups from "./examGroups/actions"
import exams from "./exams/actions"
import examLog from "./examLog/actions"
import common from "./common/actions"

export default {
  ...examGroups,
  ...exams,
  ...examLog,
  ...common
}