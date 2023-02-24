
import { GET_FULL_MENU, GET_MENU_BY_ID, GET_TAGS, GET_FULL_INGREDIENTS, FILTER_MENU, 
GET_MENU_RECOMMENDED, ERROR, RESET_FILTER, CHANGE_CART_COUNT } from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    fullMenu: [],
    filteredMenu: [],
    allIngredients: [],
    recommendedMenu: [],
    tags: [],
    detailMenu: {},
    isFiltered: false,
    cartCount: 0,
    error: ''

};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TAGS:
            return { ...state, tags: [...action.payload] }
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
            let retorno = state.filteredMenu;
            for (let i = 0; i < action.payload.length; i++) {
                let j = 0;
                let aux = []
                while( j < retorno.length){
                    if ( retorno[j].Tags.includes(action.payload[i]) ) aux.push(retorno[j]);
                    j++;
                }
                retorno = aux;
            }
            return {
                    ...state, filteredMenu: [ ...retorno]
                }
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state };
    }
}
/*
const aplyFilter = (filter, items) => {
    let retorno = items;
    for (let i = 0; i < filter.length; i++) {
        let j = 0;
        let aux = []
        while( j < retorno.length){
            if ( retorno[j].Tags.includes(filter[i]) ) aux.push(retorno[j]);
            j++;
        }
        retorno = aux;
    }
    return retorno;
}
*/
export default rootReducer;


