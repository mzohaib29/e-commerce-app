import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";
// import Product from "../components/Product";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: " ",
    }
}
export const FilterContextProvider = ({children}) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // To set the grid view
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"});
    }
    // To set the list view
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"});
    }
    // sorting function 
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userValue})
    }

    // update the search value
    const updateSearch = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_SEARCH", payload: {name, value}})
    }

    useEffect(() => { 
        dispatch({type: "SEARCH_PRODUCTS"})
        dispatch({type: "SORTING_PRODUCTS"})
    }, [products, state.sorting_value, state.filters])

    // UseEffect Run when we load page 
    // We are adding the date in state variable
    useEffect(() => {
        // dispatch method trigger the action method of reducer function
        dispatch({ type: "LOAD_FILTER_PRODUCTS" , payload: products })
    },[products])

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateSearch}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
};