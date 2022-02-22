
import { createContext, useReducer, useEffect } from "react";
import Reducer from './Reducer';

//initial state before login
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,  //user : key
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);

//(children  :all components ) initial state will be share with all components (children)
export const ContextProvider = ({ children }) => {

    //I can use my state and dispatch  take this (state and disptch) from Reducer

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //Using Local Storage with Context API
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user)); //JSON.stringify convert to json file/ user :key /state.user :value
    }, [state.user]);

    // we can use context as provider
    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </Context.Provider>

    )
}