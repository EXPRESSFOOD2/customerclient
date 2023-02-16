import {} from "../actions/index"

// @initialState == estado inicial del REDUCER
const initialState = {
    example: []
};

  // @state   = Estado Actual
  // @action  = Accion despachada
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return { ...state };
    }
}

export default rootReducer;