

const filterReducer = (state, action) => {
  switch(action.type) {

    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products: action.payload,
            all_products: action.payload,
        }
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      }

    default: return state;
  }
}
// Use default because we can change the name of function anytime when we will import
export default filterReducer