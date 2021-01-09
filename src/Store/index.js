import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'

const middlewares = []

middlewares.push(thunk)

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

const store = createStore(
  reducer,
  /* preloadedState, */ composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
