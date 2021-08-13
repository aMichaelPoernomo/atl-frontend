import { Store, applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer, { initState } from '@reducers/index'
import rootEpic from '@epics/index'

export const makeStore = (): Store => {
  const epicMiddleware = createEpicMiddleware()

  let enhancer = applyMiddleware(
    epicMiddleware,
    /* devblock:start */
    createLogger({ collapsed: true }),
    /* devblock:end */
  )

  /* devblock:start */
  enhancer = composeWithDevTools({})(enhancer)
  /* devblock:end */

  const store = createStore(rootReducer, initState, enhancer)
  epicMiddleware.run(rootEpic)
  return store
}
