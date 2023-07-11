

const initialState = {
}

export default function detailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DETAILS_DATA': {
            return action.payload
        }
        default:
            return state
    }
}


