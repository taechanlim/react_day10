const initialState = {
    number: 0,
    loading:false,
    error:null
}

const UP = 'COUNTER/UP_REQUEST'
const DOWN = 'COUNTER/DOWN_REQUEST'

/*
    COUNTER/UP

    COUNTER/UP_REQUEST일때 -> +1

    COUNTER/UP_FAIL -> X
*/

export const up = (payload) => ({ type:UP,payload })
export const down = (payload) => ({ type:DOWN,payload })

const counter = (state = initialState, action) => {
    switch(action.type){
        case "COUNTER/UP_REQUEST":
            return {
                ...state,
                loading:true,
                error:null
            }
        case "COUNTER/UP_SUCCESS":
            return{
                ...state,
                loading:false,
                number:state.number+1,
                error:null
            }
        case "COUNTER/UP_FAIL":
            return{
                ...state,
                loading:false,
                error:'접속에러'
            }
        case "COUNTER/DOWN_REQUEST":
            return{
                ...state,
                loading:true,
                error:null
            }
        case "COUNTER/DOWN_SUCCESS":
            return{
                ...state,
                loading:false,
                number:state.number-1
            }
        case "COUNTER/DOWN_FAIL":
            return{
                ...state,
                loading:false,
                error:'서버에서 에러'
            }
        default: 
            return state
    }
}

export default counter