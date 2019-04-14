import models from "../../models"

export const GET_BY_ID_AND_START_EXAMLOG_DATA = "GET_BY_ID_AND_START_EXAMLOG_DATA"
export const GET_BY_ID_AND_START_EXAMLOG_SUCCESS = "GET_BY_ID_AND_START_EXAMLOG_SUCCESS"
export const GET_BY_ID_AND_START_EXAMLOG_FAILURE = "GET_BY_ID_AND_START_EXAMLOG_FAILURE"

export const SET_QUESTION_ANSWERS_EXAMLOG_DATA = "SET_QUESTION_ANSWERS_EXAMLOG_DATA"
export const SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS = "SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS"
export const SET_QUESTION_ANSWERS_EXAMLOG_FAILURE = "SET_QUESTION_ANSWERS_EXAMLOG_FAILURE"

export const SET_QUESTION_ISMARKED_EXAMLOG_DATA = "SET_QUESTION_ISMARKED_EXAMLOG_DATA"
export const SET_QUESTION_ISMARKED_EXAMLOG_SUCCESS = "SET_QUESTION_ISMARKED_EXAMLOG_SUCCESS"
export const SET_QUESTION_ISMARKED_EXAMLOG_FAILURE = "SET_QUESTION_ISMARKED_EXAMLOG_FAILURE"

const getByIdAndStartExamLogData = (authorization, examId) => {
  return async dispatch => {
    dispatch({
      type: GET_BY_ID_AND_START_EXAMLOG_DATA
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
  type: GET_BY_ID_AND_START_EXAMLOG_SUCCESS,
  payload: data
})

const getByIdAndStartExamLogFailure = (e) => ({
  type: GET_BY_ID_AND_START_EXAMLOG_FAILURE,
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
      await models.examLogs.mutation.setQuestionAnswers(authorization, examLogId, questionId, answerId)
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

const setQuestionIsMarkedExamLogData = (authorization, examLogId, questionId, isMarked) => {
  return async dispatch => {
    dispatch({
      type: SET_QUESTION_ISMARKED_EXAMLOG_DATA,
      questionId,
      isMarked
    })
    try{
      await models.examLogs.mutation.setQuestionIsMarked(authorization, examLogId, questionId, isMarked)
      dispatch(setQuestionIsMarkedExamLogSuccess(questionId))
    }
    catch(e){
      dispatch(setQuestionIsMarkedExamLogFailure(e, questionId))
    }
  }
}

const setQuestionIsMarkedExamLogSuccess = (questionId) => ({
  type: SET_QUESTION_ISMARKED_EXAMLOG_SUCCESS,
  questionId
})

const setQuestionIsMarkedExamLogFailure = (e, questionId) => ({
  type: SET_QUESTION_ISMARKED_EXAMLOG_FAILURE,
  error: e,
  questionId
})


export default {
  getByIdAndStartExamLogData,
  setQuestionAnswersExamLogData,
  setQuestionIsMarkedExamLogData
}