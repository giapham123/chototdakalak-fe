import { combineReducers } from 'redux'
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import todosReducer from '../reducers/homeReducer'
import allProductReducer from '../reducers/showAllProductsReducer'
import postPageReducer from '../reducers/postPageReducer'
import detailsReducer from '../reducers/detailsReducer'


const persistConfig = {
    key: 'root',
    storage,
    // allProduct:[allProductReducer]
}
const rootReducer = combineReducers({
    cate: todosReducer,
    allProduct: allProductReducer,
    postPage: postPageReducer,
    detailsProduct:detailsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
