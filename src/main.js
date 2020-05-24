import React, { useCallback } from 'react'
//buscar os dados do context para saber se está logado ou não
import { useContext, useEffect } from 'react'
// mas qual context ? o auth
import AuthContext from './state/Auth/Context'

// actions

import * as authActions from './state/Auth/actions'

export default function(){
    // criar uma constante para consumir os dados do context

    // destructuring do objeto declarado lá no provider e do metodo que o muda
    const { isLoggedIn, logInDispatch } = useContext(AuthContext)

    useEffect(()=>{
        // ele vai retornar o objeto lá do context que definimos
        console.log(isLoggedIn)
    },[isLoggedIn])

    const handleClick = useCallback(()=>{
        if(isLoggedIn === true){
            logInDispatch(authActions.logOut)
        }else{
            logInDispatch(authActions.logIn)
        }
    },[logInDispatch, isLoggedIn]) 

    return(
        <>
            <h1>O usuário está logado? {isLoggedIn ? "Sim" : "Não"}</h1>
            <button onClick={handleClick}>{isLoggedIn? "Logout" : "Login"}</button>
        </>
    )
}