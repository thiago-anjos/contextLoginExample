// importar o usestate para usar no value do provider
import React, { useState, useReducer } from 'react';
import AuthContext from './Context'

// trazer o reducer para ca
import AuthReducer from './reducer'

// o provider vem do context e precisa saber qual context ele pertence
// por isso ele está dentro da pasta auth

// provider precisar receber os componentes filhos com o children
function Provider({children}){

    // deu pra entender que o que vc passa no value do provider é um "USESTATE" ?
    // vamos comentar o usestate e usar o useReducer
    //const [isLoggedIn, setIsloggedIn] = useState(false);

    // usando o reducer
    const [isLoggedIn, logInDispatch] = useReducer(AuthReducer,false)

    // retornar o provider
    // o estado inicial será passado no value do provider
    // um objeto com isloggedIn
    return(
        // o que passar no value do provider é a constante, o estado e o metodo que a atualiza, seguindo as regras do state
        //<AuthContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
        <AuthContext.Provider value={{ isLoggedIn, logInDispatch }}>
            {children}
        </AuthContext.Provider>
    )

}

export default Provider;