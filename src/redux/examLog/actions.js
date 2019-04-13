import models from "../../models"

export const GETBYIDANDSTART_EXAMLOG_DATA = "GETBYIDANDSTART_EXAMLOG_DATA"
export const GETBYIDANDSTART_EXAMLOG_SUCCESS = "GETBYIDANDSTART_EXAMLOG_SUCCESS"
export const GETBYIDANDSTART_EXAMLOG_FAILURE = "GETBYIDANDSTART_EXAMLOG_FAILURE"

const getByIdAndStartExamLogData = (authorization, examId) => {
  return async dispatch => {
    dispatch({
      type: GETBYIDANDSTART_EXAMLOG_DATA
    })

    try{
      const res  = await models.examLogs.query.getByIdAndStart(authorization, examId)
      dispatch(getByIdAndStartExamLogSuccess(res))
    }
    catch(e){
      dispatch(getByIdAndStartExamLogFailure(e))
    }
  }
}

const getByIdAndStartExamLogSuccess = (data) => ({
  type: GETBYIDANDSTART_EXAMLOG_SUCCESS,
  payload: data
})

const getByIdAndStartExamLogFailure = (e) => ({
  type: GETBYIDANDSTART_EXAMLOG_FAILURE,
  error: e
})

export default {
  getByIdAndStartExamLogData
}