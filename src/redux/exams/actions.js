import models from "../../models"

export const FETCH_EXAMS_DATA = "FETCH_EXAMS_DATA"
export const FETCH_EXAMS_SUCCESS = "FETCH_EXAMS_SUCCESS"
export const FETCH_EXAMS_FAILURE = "FETCH_EXAMS_FAILURE"
export const SET_EXAMS_FILTER = "SET_EXAMS_FILTER"

const fetchExamsData = (filter) => {
  return async dispatch => {
    dispatch({
      type: FETCH_EXAMS_DATA
    })

    try{
      const res  = await models.exams.query.fetcG(filter)
      dispatch(fetchExamsSuccess(res))
    }
    catch(e){
      dispatch(fetchExamsFailure(e))
    }
  }
}

const fetchExamsSuccess = (data) => ({
  type: FETCH_EXAMS_SUCCESS,
  payload: data
})

const fetchExamsFailure = (e) => ({
  type: FETCH_EXAMS_FAILURE,
  error: e
})

const setExamsFilter = (filter) => ({
  type: SET_EXAMS_FILTER,
  filter
})

export default {
  fetchExamsData,
  setExamsFilter
}