import config from "../config"
import axios from "axios"

const mutation = {
  async guest(){
    const res = await axios.post(`${config.API_URL}/auth/guest`, {})

    return res.data
  }
}

const query = {
 
}

export default {
  mutation,
  query
}