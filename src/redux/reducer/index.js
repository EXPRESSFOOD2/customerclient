import { GET_FULL_MENU, GET_MENU_BY_ID, GET_FULL_INGREDIENTS } from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    fullMenu: [],
    allIngredients: [],
    detailMenu: {},
};

  // @state   = Estado Actual
  // @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FULL_MENU:
            return { ...state, fullMenu: action.payload }
        case GET_MENU_BY_ID:
            return { ...state, detailMenu: action.payload }
        case GET_FULL_INGREDIENTS:
            return { ...state, allIngredients: action.payload }
        default:
            return { ...state };
    }
}

export default rootReducer;