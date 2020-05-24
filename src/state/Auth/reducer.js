// esse é o cara que muda o state do provider de uma forma mais organizada
// ao invés de deixar lá em cima do provider usando o context
// é uma função e por isso vem com reducer.js

// o state é o primeiro argumento que nossa funcao reducer recebe

import * as  authTypes from './types';

function reducer(state, action){
    switch(action.type){
        case authTypes.LOG_IN:
            return true
        case authTypes.LOG_OUT:
            return false
        default:
            throw new Error()
    }
}
export default reducer;
