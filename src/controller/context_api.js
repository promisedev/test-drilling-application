import React, { useState, useEffect, useContext, useReducer} from 'react';
import {Reducer} from './reducer'

const AppContext = React.createContext();

const initialState= {
 
  loading:false,

}
const AppProvider = ({children}) => {
const [isLoading, setisLoading] = useState(false)
const [isLogin, setisLogin] = useState(false)
const handleSubmit = (e)=>{
  e.preventDefault()}

let [state, Dispatch] = useReducer(Reducer, initialState);
    return (   
  <AppContext.Provider value={{
    isLoading,
    setisLoading,
    handleSubmit,
    isLogin,
    setisLogin
    
  }}>{children}</AppContext.Provider>
    )
}
 export const useGlobalContext = () =>{
    return useContext(AppContext) 
 }

export  {AppContext, AppProvider}