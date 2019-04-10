import config from "../config"
import axios from "axios"

const Mutation = {

}

const Query = {
  async FetcG(filter){
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
  }
}

export default {
  Mutation,
  Query
}