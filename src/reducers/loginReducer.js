
const initialState = {
    token:null,
    userDetail:{}
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOKEN': {
            return {
                ...state,
                token:action.payload
            }
        }
        case 'USR_INF': {
            return {
                ...state,
                userDetail:action.payload
            }
        }
        default:
            return state
    }
}


