import axios from "axios";

// Action Type!!
export const GET_FULL_MENU = "GET_ALL_MENU";
export const GET_FULL_INGREDIENTS = "GET_FULL_INGREDIENTS";
export const GET_MENU_BY_ID = "GET_MENU_BY_ID";
export const FILTER_MENU = "FILTER_MENU";

export const getFullMenu = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/menu/get`)
    let data = result.data;
    dispatch({type: GET_FULL_MENU, payload: data})
  }
}
export const getFullIngredients = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/ingredients/get`)
    let data = result.data;
    dispatch({type: GET_FULL_INGREDIENTS, payload: data})
  }
}

export const getMenuById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/menu/get/${id}`)
    let data = result.data;
    dispatch({type: GET_MENU_BY_ID, payload: data})
  }
}
export const filterMenu = (category) => (dispatch)=> {
   
    dispatch({type: FILTER_MENU, payload: category})
  }

export const getImageUrl = (imageStr, imageFn) => {
    return async (dispatch) => {
        try {
          let result = await axios.post("http://localhost:3001/processImage/post", {imageStr: imageStr})
          imageFn(result.data)
          //! ?! manejar Success && Error
          return result;
        } catch(error) {
          console.error(error)
        }
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
