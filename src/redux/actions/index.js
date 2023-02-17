import axios from "axios";

// Action Type!!
export const GET_FULL_MENU = "GET_ALL_MENU";
export const GET_MENU_BY_ID = "GET_MENU_BY_ID";

export const getFullMenu = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/menu/get`)
    let data = result.data;
    dispatch({type: GET_FULL_MENU, payload: data})
  }
}

export const getMenuById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/menu/get/${id}`)
    let data = result.data;
    dispatch({type: GET_MENU_BY_ID, payload: data})
  }
}


/*

function dispatchSort(sort) {
  return async(dispatch) => {
    switch( sort ){
      case "desc":
        return await dispatch(sortRecipesDesc());
      case "asc":
        return await dispatch(sortRecipesAsc());
      case "high":
        return await dispatch(sortRecipesHighScore())
      case "low":
        return await dispatch(sortRecipesLowScore())
      default:
        return await dispatch(unSorted())
    }
  }
}
*/
