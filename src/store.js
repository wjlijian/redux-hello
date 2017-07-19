import {createStore} from 'redux'
import commentReducer from './comment'


let store=createStore(commentReducer)

export default store
