//Siempre un store que se encarga del state de toda la app 

import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //funciones asyncnronas
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),

        typeof window === 'object' && 
           typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
              window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

              // Se ve la web sin instalar reduxdevtools


        
        
    )
);

export default store;
