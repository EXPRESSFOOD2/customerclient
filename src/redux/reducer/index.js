import {
  GET_FULL_MENU,
  GET_MENU_BY_ID,
  GET_TAGS,
  GET_FULL_INGREDIENTS,
  FILTER_MENU,
  GET_MENU_RECOMMENDED,
  ERROR,
  RESET_FILTER,
  CHANGE_CART_COUNT,
  CHANGE_CART_TOTAL,
} from "../actions/index";

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
  error: "",
};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS:
      return { ...state, tags: [...action.payload] };
    // Menu
    case GET_FULL_MENU:
      return {
        ...state, fullMenu: action.payload, filteredMenu: action.payload };
    case GET_MENU_BY_ID:
      return { ...state, detailMenu: action.payload };
    case GET_MENU_RECOMMENDED:
      return { ...state, recommendedMenu: action.payload };
    // ingredientes
    case GET_FULL_INGREDIENTS:
      return { ...state, allIngredients: action.payload };
    case RESET_FILTER:
      return { ...state, filteredMenu: state.fullMenu };
   /* 
    case CHANGE_CART_COUNT:
            const result = action.payload === "-" ? state.cartCount - 1 : state.cartCount + 1;
            return { ...state, cartCount: result }
   */
     case FILTER_MENU:
            return { ...state, filteredMenu: [ ...aplyFilter(action.payload, state.filteredMenu)] }
            
    case CHANGE_CART_COUNT: {
      const result =
        action.payload === "-" ? state.cartCount - 1 : state.cartCount + 1;
      return result < 0
        ? { ...state, cartCount: 0 }
        : { ...state, cartCount: result };
    }
    case CHANGE_CART_TOTAL: {
      let cartTotal;
      if (action.payload.type === "-")
        cartTotal = state.cartTotal - action.payload.value;
      if (action.payload.type === "+")
        cartTotal = state.cartTotal + action.payload.value;
      if (action.payload.type === "reset") cartTotal = 0;
      if (action.payload.type === "init") cartTotal = action.payload.value;
      return cartTotal < 0
        ? { ...state, cartTotal: 0 }
        : { ...state, cartTotal };
    }
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

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

export default rootReducer;


