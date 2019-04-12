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
  // async fetcG(filter){
    // const res = await axios.get(`${config.API_URL}/examGroups`, {
    //   params: {
    //     ...filter
    //   }
    // })
    // if (res.data.length === 0){
    //   return {
    //     data: [],
    //     count: 0
    //   }
    // } 

    // return res.data[0]
  // }
}

export default {
  mutation,
  query
}