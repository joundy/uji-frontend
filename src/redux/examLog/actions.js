import models from "../../models"

export const GETBYIDANDSTART_EXAMLOG_DATA = "GETBYIDANDSTART_EXAMLOG_DATA"
export const GETBYIDANDSTART_EXAMLOG_SUCCESS = "GETBYIDANDSTART_EXAMLOG_SUCCESS"
export const GETBYIDANDSTART_EXAMLOG_FAILURE = "GETBYIDANDSTART_EXAMLOG_FAILURE"

export const SET_QUESTION_ANSWERS_EXAMLOG_DATA = "SET_QUESTION_ANSWERS_EXAMLOG_DATA"
export const SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS = "SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS"
export const SET_QUESTION_ANSWERS_EXAMLOG_FAILURE = "SET_QUESTION_ANSWERS_EXAMLOG_FAILURE"

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

const setQuestionAnswersExamLogData = (authorization, examLogId, questionId, answerId) => {
  return async dispatch => {
    dispatch({
      type: SET_QUESTION_ANSWERS_EXAMLOG_DATA,
      questionId,
      answerId
    })
    try{
      await models.examLogs.mutation.setAnswers(authorization, examLogId, questionId, answerId)
      dispatch(setQuestionAnswersExamLogSuccess(questionId))
    }
    catch(e){
      dispatch(setQuestionAnswersExamLogFailure(e, questionId))
    }
  }
}

const setQuestionAnswersExamLogSuccess = (questionId) => ({
  type: SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS,
  questionId
})

const setQuestionAnswersExamLogFailure = (e, questionId) => ({
  type: SET_QUESTION_ANSWERS_EXAMLOG_FAILURE,
  error: e,
  questionId
})


export default {
  getByIdAndStartExamLogData,
  setQuestionAnswersExamLogData
}