import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const initialState = {
  medications: [],
  clinicalTrials: [],
  currentUser: null,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MEDICATIONS":
      return {
        ...state,
        medications: action.payload,
      };
    case "SET_CLINICAL_TRIALS":
      return {
        ...state,
        clinicalTrials: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
