import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'


const store = createStore(reducer, /* preloadedState, */ composeWithDevTools(applyMiddleware(thunk)))

export default store