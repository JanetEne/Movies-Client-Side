import {createStore} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './reducer'

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer())

export default store
