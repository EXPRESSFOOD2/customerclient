/* eslint-disable no-case-declarations */
import { GET_FULL_MENU, GET_MENU_BY_ID, GET_FULL_INGREDIENTS, FILTER_MENU, GET_MENU_RECOMMENDED, ERROR, RESET_FILTER, CHANGE_CART_COUNT } from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    fullMenu: [],
    filteredMenu: [],
    allIngredients: [],
    recommendedMenu: [],
    detailMenu: {},
    isFiltered: false,
    cartCount: 0,
    error: ''
};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Menu
        case GET_FULL_MENU:
            return { ...state, fullMenu: action.payload, filteredMenu: action.payload }
        case GET_MENU_BY_ID:
            return { ...state, detailMenu: action.payload }
        case GET_MENU_RECOMMENDED:
            return { ...state, recommendedMenu: action.payload }
        // ingredientes
        case GET_FULL_INGREDIENTS:
            return { ...state, allIngredients: action.payload }
        case RESET_FILTER:
            return { ...state, filteredMenu: state.fullMenu }
        case CHANGE_CART_COUNT:
            const result = action.payload === "-" ? state.cartCount - 1 : state.cartCount + 1;
            return { ...state, cartCount: result }
        case FILTER_MENU:
            // eslint-disable-next-line array-callback-return
            return {
                ...state, filteredMenu: [...state.fullMenu].filter(menu => {
                    return menu.Ingredients.find((ingredient) => ingredient.name === action.payload)
                })
            }



        case ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state };
    }
}

export default rootReducer;