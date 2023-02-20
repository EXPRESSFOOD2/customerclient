import { GET_FULL_MENU, GET_MENU_BY_ID, GET_FULL_INGREDIENTS, FILTER_MENU } from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    fullMenu: [],
    filteredMenu: [],
    allIngredients: [],
    detailMenu: {},
    isFiltered: false,
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
        case FILTER_MENU:
            if(state.isFiltered){
                return  { ...state, filteredMenu: state.filteredMenu.filter() }
            }
        default:
            return { ...state };
    }
}

export default rootReducer;