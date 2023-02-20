import { GET_FULL_MENU, GET_MENU_BY_ID, GET_FULL_INGREDIENTS, FILTER_MENU, GET_MENU_RECOMMENDED, ERROR } from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    fullMenu: [],
    filteredMenu: [],
    allIngredients: [],
    recommendedMenu: [],
    detailMenu: {},
    isFiltered: false,
    error: ''
};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Menu
        case GET_FULL_MENU:
            return { ...state, fullMenu: action.payload }
        case GET_MENU_BY_ID:
            return { ...state, detailMenu: action.payload }
        case GET_MENU_RECOMMENDED:
            return { ...state, recommendedMenu: action.payload }
        // ingredientes
        case GET_FULL_INGREDIENTS:
            return { ...state, allIngredients: action.payload }
        case FILTER_MENU:
            if (state.isFiltered) {
                return { ...state, filteredMenu: state.filteredMenu.filter() }
            }
            return { ...state }

        case ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state };
    }
}

export default rootReducer;