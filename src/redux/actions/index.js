import axios from "axios";

// Action Type!!
export const GET_FULL_MENU = "GET_ALL_MENU";
export const GET_FULL_INGREDIENTS = "GET_FULL_INGREDIENTS";
export const GET_MENU_BY_ID = "GET_MENU_BY_ID";
export const FILTER_MENU = "FILTER_MENU";
export const GET_MENU_RECOMMENDED = "GET_MENU_RECOMMENDED";
export const ERROR = "ERROR";
export const RESET_FILTER = "RESET_FILTER";
export const CHANGE_CART_COUNT = "CHANGE_CART_COUNT";
export const CHANGE_CART_TOTAL = "CHANGE_CART_TOTAL";

//*
export const GET_TAGS = "GET_TAGS";

export const processFilterAction = (filters) => async (dispatch) => {
  //dispatch(getFullMenu());    Cuando como demora en ejecutarse... sobreescribe el filtrado
  dispatch(resetFilter());
  dispatch({ type: FILTER_MENU, payload: filters });
};
export const getTagsAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`http://localhost:3001/tags/get`);
      let data = result.data;
      dispatch({ type: GET_TAGS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const getRecommendedMenu = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`/menu/get/recommended`);

      let data = result.data;
      dispatch({ type: GET_MENU_RECOMMENDED, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const changeCartCount = (op) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_CART_COUNT, payload: op });
  };
};
export const changeCartTotal = (obj) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_CART_TOTAL, payload: obj });
  };
};

export const getFullMenu = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/menu/get`);
    let data = result.data;
    dispatch({ type: GET_FULL_MENU, payload: data });
  };
};

export const getFullIngredients = () => {
  return async (dispatch) => {
    const result = await axios.get(`/ingredients/get`);

    let data = result.data;
    dispatch({ type: GET_FULL_INGREDIENTS, payload: data });
  };
};

export const getMenuById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`/menu/get/${id}`);

    let data = result.data;
    dispatch({ type: GET_MENU_BY_ID, payload: data });
  };
};
export const filterMenu = (category) => (dispatch) => {
  dispatch({ type: FILTER_MENU, payload: category });
};
export const resetFilter = () => (dispatch) => {
  dispatch({ type: RESET_FILTER });
};

export const getImageUrl = (imageStr, imageFn) => {
  return async (dispatch) => {
    try {
      let result = await axios.post("/processImage/post", {
        imageStr: imageStr,
      });
      imageFn(result.data);

      //! ?! manejar Success && Error
      return result;
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const sendPayment = async(cart) => {
 const postPayment =  await axios.post("/payments/create",cart )

return window.location.href = postPayment.data
};
