import _ from "lodash"

import {
  GETBYIDANDSTART_EXAMLOG_DATA,
  GETBYIDANDSTART_EXAMLOG_SUCCESS,
  GETBYIDANDSTART_EXAMLOG_FAILURE,
  SET_QUESTION_ANSWERS_EXAMLOG_DATA,
  SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS,
  SET_QUESTION_ANSWERS_EXAMLOG_FAILURE
} from "./actions"

const initialState = {
  payload: {
    questions: [{
      title: "",
      answer: {
        list: [],
        selectedIds: [],
      }
    }],
    exam: {
      passingGrade: 0
    },
    result:{
      pass: 0,
      failed: 0
    },
    remainingTime: 0
  },
  isLoading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBYIDANDSTART_EXAMLOG_DATA:
    return {
      ...state,
      isLoading: true
    }
    case GETBYIDANDSTART_EXAMLOG_SUCCESS:
    return {
      ...state,
      isLoading: false,
      payload: action.payload
    }
    case GETBYIDANDSTART_EXAMLOG_FAILURE:
    return {
      ...state, 
      isLoading: false,
      error: action.error
    }
    case SET_QUESTION_ANSWERS_EXAMLOG_DATA:

    let index = _.findIndex(state.payload.questions, { id: action.questionId } )
    state.payload.questions[index].answer.tempSelectedIds = state.payload.questions[index].answer.selectedIds
    state.payload.questions[index].answer.selectedIds = [action.answerId]

    return {
      ...state
    }
    case SET_QUESTION_ANSWERS_EXAMLOG_SUCCESS:

    index = _.findIndex(state.payload.questions, { id: action.questionId } )
    state.payload.questions[index].answer.tempSelectedIds = state.payload.questions[index].answer.selectedIds

    return {
      ...state
    }
    case SET_QUESTION_ANSWERS_EXAMLOG_FAILURE:
    
    index = _.findIndex(state.payload.questions, { id: action.questionId } )
    state.payload.questions[index].answer.selectedIds = state.payload.questions[index].answer.tempSelectedIds

    return {
      ...state
    }
    default:
      return state
  }
}