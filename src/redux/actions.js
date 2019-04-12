import examGroups from "./examGroups/actions"
import exams from "./exams/actions"
import examLog from "./examLog/actions"

export default {
  ...examGroups,
  ...exams,
  ...examLog
}