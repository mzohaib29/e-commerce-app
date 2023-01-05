import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
}

export const FilterContextProvider = ({children}) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // To set the grid view
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"});
    }

    // UseEffect Run when we load page 
    // We are adding the date in state variable
    useEffect(() => {
        // dispatch method trigger the action method of reducer function
        dispatch({ type: "LOAD_FILTER_PRODUCTS" , payload: products })
    },[products])

    return <FilterContext.Provider value={{...state, setGridView}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
};