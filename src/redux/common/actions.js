export const SET_LAST_URL = "SET_LAST_URL"
export const SET_LAST_URL_BEFORE_EXAM = "SET_LAST_URL_BEFORE_EXAM"

const setLastUrl = (lastUrl) => ({
  type: SET_LAST_URL,
  lastUrl
})

const setLastUrlBeforeExam = (lastUrlBeforeExam) => ({
  type: SET_LAST_URL_BEFORE_EXAM,
  lastUrlBeforeExam
})

export default {
  setLastUrl,
  setLastUrlBeforeExam
}