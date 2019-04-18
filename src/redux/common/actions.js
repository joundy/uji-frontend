export const SET_LAST_URL = "SET_LAST_URL"

const setLastUrl = (lastUrl) => ({
  type: SET_LAST_URL,
  lastUrl
})

export default {
  setLastUrl
}