import React, { useState, useEffect, useContext, useReducer} from 'react';
import {Reducer} from './reducer'

const AppContext = React.createContext();

const initialState= {
 
  loading:false,

}
const AppProvider = ({children}) => {

const handleClick = (e)=>{
  e.preventDefault()}

let [state, Dispatch] = useReducer(Reducer, initialState);
    return (   
  <AppContext.Provider value={{
    
    handleClick,
    
  }}>{children}</AppContext.Provider>
    )
}
 export const useGlobalContext = () =>{
    return useContext(AppContext) 
 }

export  {AppContext, AppProvider}