const initialState = {
    news: [],
    filters: [],
    fetchingState: 'loading'
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING': 
            return {
                ...state,
                fetchingState: 'loading'

            }
        case 'FETCHED': 
            return {
                ...state,
                news: action.payload,
                fetchingState: 'loaded'
            }
        case 'FETCHING_ERROR': 
            return {
                ...state,
                fetchingState: 'error'
            }
        default:
            return state
    }
}
