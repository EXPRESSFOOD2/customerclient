import { GET_FULL_MENU, GET_MENU_BY_ID } from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    fullMenu: [],
    detailMenu: [],
};

  // @state   = Estado Actual
  // @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FULL_MENU:
            return { ...state, fullMenu: action.payload }
        case GET_MENU_BY_ID:
            return { ...state, detailMenu: action.payload }
        default:
            return { ...state };
    }
}

export default rootReducer;