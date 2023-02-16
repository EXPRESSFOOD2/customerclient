//import axios from "axios";

// Action Type!!
/*
export const GET_FULL_DETAIL = "GET_FULL_DETAIL";
export const GET_DIETS = "GET_DIETS";
*/

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
export const createRecipe = (name, description, score, stepByStep, url, dietsIds) => {
  return async (dispatch) => {
    const result = await axios.post(window.env.URL_POST_RECIPE, {name, description, score, stepByStep, url, dietsIds})
    let data = result.data;
    dispatch({type: CREATE_RECIPE, payload: data})
    alert("Su receta se ha creado con exito")
  }
}
*/
