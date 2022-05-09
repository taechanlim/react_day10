import { combineReducers } from "redux";
import { createAction, handleActions } from 'redux-actions'
import counter from "./counter";
import user from "./user";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persist = {
    key:'user',
    storage,
    whitelist:['user']
}

// key
// 어떤내용을 담을거니?

//이 파일의 최초 실행 : createStore코드가 실행될때.(store가 만들어질때) -> render되기 전이다.
// check : 이 코드 실행할때 실행한 브라우저에 localStorage라는 내용안에서 내가 설정한 변수로 저장한값이 있니?
// 없으면 만들어줄게~(user의 상태값으로 넣어줄게) , 있으면 로컬스토리지의 내용을 가지고 상태를 바꿀게~
/*
    localStorage.setItem('name','ingoo')
    
    localStorage.getItem('name')
    > 'ingoo'
*/


// localStorage.setItem(persistKey,'ingoo')



const rootReducer = combineReducers({
    counter,
    user
})


export default persistReducer(persist,rootReducer)