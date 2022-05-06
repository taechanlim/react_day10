// side effects : redux-saga/effects
import { all } from 'redux-saga/effects' 
//all -> 함수들을 배열에 담아놓고 한번에 관리

import watchCounter from './counterSaga'

export default function* rootSaga(){
    yield all([
        watchCounter()
    ])
}


