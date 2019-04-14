import config from "../config"
import axios from "axios"
import querystring from "querystring"

const mutation = {
  async generate(authorization, examId){
    const res = await axios.post(`${config.API_URL}/examLogs/generate`, querystring.stringify({
      examId
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": authorization
      }
    })

    return res.data
  },
  async setQuestionAnswers(authorization, examLogId, questionId, selectedIds){
    const res = await axios.put(`${config.API_URL}/examLogs/${examLogId}/setAnswers/questions/${questionId}`, querystring.stringify({
      selectedIds
    }),{
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": authorization
      }
    })

    return res.data 
  },
  async setQuestionIsMarked(authorization, examLogId, questionId, isMarked){
    const res = await axios.put(`${config.API_URL}/examLogs/${examLogId}/setIsMarked/questions/${questionId}`, querystring.stringify({
      isMarked
    }),{
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": authorization
      }
    })

    return res.data
  },
  async submit(authorization, examLogId){
    const res = await axios.post(`${config.API_URL}/examLogs/${examLogId}/submit`, {},{
      headers: {
        "Authorization": authorization
      }
    })

    return res.data
  }
}

const query = {
  async getByIdAndStart(authorization, examLogId){
    const res = await axios.get(`${config.API_URL}/examLogs/${examLogId}`, {
      headers: {
        "Authorization": authorization
      }
    })

    return res.data
  }
}

export default {
  mutation,
  query
}