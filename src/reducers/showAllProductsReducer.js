

const initialState = []

export default function allProductReducer(state = initialState, action) {
    switch (action.type) {
        case 'allProduct/getAllProduct': {
            return action.payload
        }
        default:
            return state
    }
}


