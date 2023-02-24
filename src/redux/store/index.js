// @applyMiddleware == facilita al redux hacer cosas que no puede hacer
// @compose == permite aplicar mejoras al store
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";

// @thunkMiddleware == agrega funcionalidad al store
import thunkMiddleware from "redux-thunk";

// @composeEnhancer == permite ver el estado global en web
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//setupMiddlewares
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
