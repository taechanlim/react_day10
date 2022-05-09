import { createStore,compose,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga' 
import rootSaga from '../sagas'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

const SagaMiddleware = createSagaMiddleware()
const middleware = [SagaMiddleware]
const enhancer = process.env.NODE_ENV === 'production'
? compose(applyMiddleware(...middleware)) // 배포모드
: composeWithDevTools(applyMiddleware(...middleware)) // 개발모드

const store = createStore(rootReducer,enhancer) // rootReducer , enhancer
SagaMiddleware.run(rootSaga) //sagas/index.js
//npm install redux-saga axios

const persistor = persistStore(store)

const Store = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loadding={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Store