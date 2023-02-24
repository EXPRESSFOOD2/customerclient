
import {
  GET_FULL_MENU,
  GET_MENU_BY_ID,
  GET_FULL_INGREDIENTS,
  FILTER_MENU,
  GET_MENU_RECOMMENDED,
  ERROR,
  RESET_FILTER,
  CHANGE_CART_COUNT,
  CHANGE_CART_TOTAL,
} from "../actions/index";
/* eslint-disable no-case-declarations */


// @initialState == estado inicial del REDUCER
const initialState = {
  fullMenu: [],
  filteredMenu: [],
  allIngredients: [],
  recommendedMenu: [],
  detailMenu: {},
  isFiltered: false,
  cartCount: 0,
  cartTotal: 0,
  error: "",
};

// @state   = Estado Actual
// @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Menu
    case GET_FULL_MENU:
      return {
        ...state,
        fullMenu: action.payload,
        filteredMenu: action.payload,
      };
    case GET_MENU_BY_ID:
      return { ...state, detailMenu: action.payload };
    case GET_MENU_RECOMMENDED:
      return { ...state, recommendedMenu: action.payload };
    // ingredientes
    case GET_FULL_INGREDIENTS:
      return { ...state, allIngredients: action.payload };
    case RESET_FILTER:
      return { ...state, filteredMenu: state.fullMenu };
    case CHANGE_CART_COUNT:
      const result =
        action.payload === "-" ? state.cartCount - 1 : state.cartCount + 1;
      return result < 0
        ? { ...state, cartCount: 0 }
        : { ...state, cartCount: result };
    case CHANGE_CART_TOTAL:
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

    case FILTER_MENU:
      // eslint-disable-next-line array-callback-return
      return {
        ...state,
        filteredMenu: [...state.fullMenu].filter((menu) => {
          return menu.Ingredients.find(
            (ingredient) => ingredient.name === action.payload
          );
        }),
      };

    case ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
