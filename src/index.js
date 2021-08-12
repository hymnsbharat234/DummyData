import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import CategoryStore from './Reducer/CategoryReducer'

const store = configureStore({
    reducer:{
        Category:CategoryStore
        
    }

    
 
})

const index=()=>{
    return(
        
            <React.StrictMode>
                <Provider store={store}>
                <App />
                </Provider>
            </React.StrictMode>
      
        )
    
}
export default index