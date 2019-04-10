import models from "../../models"

export const FETCH_EXAMGROUPS_DATA = "FETCH_EXAMGROUPS_DATA"
export const FETCH_EXAMGROUPS_SUCCESS = "FETCH_EXAMGROUPS_SUCCESS"
export const FETCH_EXAMGROUPS_FAILURE = "FETCH_EXAMGROUPS_FAILURE"

const fetchExamGroupsData = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_EXAMGROUPS_DATA
    })

    try{
      const res  = await models.examGroups.query.fetcG()
      dispatch(fetchExamGroupsSuccess(res))
    }
    catch(e){
      dispatch(fetchExamGroupsFailure(e))
    }
  }
}

const fetchExamGroupsSuccess = (data) => ({
  type: FETCH_EXAMGROUPS_SUCCESS,
  payload: data
})

const fetchExamGroupsFailure = (e) => ({
  type: FETCH_EXAMGROUPS_FAILURE,
  error: e
})

export default {
  fetchExamGroupsData
}