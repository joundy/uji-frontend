import models from "../../models"

export const HOME_SET_FILTER = "HOME_SET_FILTER"
export const HOME_LOAD_EXAMGROUPS_SUCCESS = "HOME_LOAD_EXAMGROUPS"


const setFilter = filter => ({
  type: HOME_SET_FILTER,
  payload: filter
})

const loadExamGroups = filter => {
  return async dispatch => {
    try{
      const res  = await models.examGroups.Query.FetcG(filter)
      if (res[0] === 200){
        dispatch(loadExamGroupsSuccess(res[1]))
      } 
    }
    catch(e){
      console.log(e)
    }
  }
}

const loadExamGroupsSuccess = (res) => ({
  type: HOME_LOAD_EXAMGROUPS_SUCCESS,
  payload: res
})


export default{
  setFilter,
  loadExamGroups
}