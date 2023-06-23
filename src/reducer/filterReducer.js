

const filterReducer = (state, action) => {
  switch(action.type) {

    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
        }
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      }
    case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        }
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById('sort');
      // let sort_Value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_Value);
      return {
        ...state,
        // sorting_value: sort_Value,
        sorting_value: action.payload,
      }  

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortData = [...action.payload];

      const {filter_products, sorting_value} = state;
      let tempSortData = [...filter_products];

      const sortingProducts = (a,b) => {

        if(sorting_value === "lowest") {
          return a.price - b.price;
        };

        if(sorting_value === "highest") {
          return b.price - a.price;
        };

        if(sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if(sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      }
      // if(sorting_value === "z-a") {
      //   newSortData = tempSortData.sort((a,b) => {
      //     return b.name.localeCompare(a.name);
      //   })
      // }
      newSortData = tempSortData.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      }

      case "UPDATE_SEARCH": 
      const {name, value} = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      }   

      case "SEARCH_PRODUCTS": 
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter(currElem => {
          return currElem.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      }

    default: return state;
  }
}
// Use default because we can change the name of function anytime when we will import
export default filterReducer