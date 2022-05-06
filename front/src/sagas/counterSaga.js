import {takeLatest , call ,put} from 'redux-saga/effects'
import axios from 'axios'

async function upAPI(payload){
    // console.log(payload)
    //return await axios.post('http://localhost:3500',payload)
    return new Promise( (res,rej)=>{
        setTimeout( ()=>{
            res(true)
        },1000 )
    } )
}

async function downAPI(payload){
    return new Promise( (res,rej)=>{
        setTimeout( ()=>{
            res(true)
        },1000 )
    } )
}

//take매서드로 호출된함수는 action전체를 인자값으로 던져줘야함.
function* countUp(action){
    //여기서 API 내용을 작성해야한다.
    try{
        //call 인자값이 2개
        //1.함수명,
        //2. 1함수의 인자값,
        const result = yield call(upAPI,action.payload)
        //dispatch 성공에대한 프로세스
        yield put({
            type:'COUNTER/UP_SUCCESS'
        })

    }catch (e) {
        //dispatch 실패에대한 프로세스
        yield put({
            type:'COUNTER/UP_FAIL'
        })
    }
}


function* countDown(action){
    try{
        yield call(downAPI,action.payload)
        yield put({
            type:'COUNTER/DOWN_SUCCESS'
        })
    }catch (e) {
        //dispatch 실패에대한 프로세스
        yield put({
            type:'COUNTER/DOWN_FAIL'
        })
    }
}


// action을 추적하는것 : action->dispatch({type:'UP'} )
export default function* watchCounter(){
    //take들은 인자값이 2개
    // 1.action.type내용을 넣어야함.
    // 2.type추적이 되었다면 실행할 함수명.(gen 함수여야함)
    yield takeLatest('COUNTER/UP_REQUEST',countUp)
    yield takeLatest('COUNTER/DOWN_REQUEST',countDown)
}

/*
    call -> 동기적으로 실행됨
*/