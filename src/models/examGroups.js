import config from "../config"
import axios from "axios"

const mutation = {

}

const query = {
  async fetcG(filter){
    const res = await axios.get(`${config.API_URL}/examGroups`, {
      params: {
        ...filter
      }
    })
   
    if (res.data.length === 0 || res.data === null ){
      return {
        data: [],
        count: 0        
      }
    }

    return res.data[0]
  }
}

export default {
  mutation,
  query
}