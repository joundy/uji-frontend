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
  }
}

const query = {
  async getByIdAndStart(authorization, examLogId){
    console.log(authorization)
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