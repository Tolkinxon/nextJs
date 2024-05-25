const initialState = {
    staticNews:[],
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
                staticNews: action.payload,
                fetchingState: 'loaded'
            }
        case 'FETCHING_ERROR': 
            return {
                ...state,
                fetchingState: 'error'
            }
        case 'ADD_DATA': 
            const newData = [ action.payload,...state.staticNews ]
            return {
                ...state,
                news: newData,
                staticNews: newData
            }
        case 'SETTING_NEW_ARRAY': 
            return {
                ...state,
                news: action.payload,
                staticNews: action.payload
            }
        case 'SETTING_FILTERED_ARRAY': 
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}
