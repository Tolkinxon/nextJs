const initialState = {
    filters: [],
    filtersFetchingState: '',
    activeCategory: 'all',
}

export const filters = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTERS_FETCHING': 
            return {
                ...state,
                filtersFetchingState: 'loading'
            }
        case 'FILTERS_FETCHED': 
            return {
                ...state,
                filters: action.payload,
                filtersFetchingState: 'loaded'
            }
        case 'FILTERS_FETCHING_ERROR': 
            return {
                ...state,
                filtersFetchingState: 'error'
            }
        case 'CHANGE_ACTIVE_CATEGORY': 
            return {
                ...state,   
                activeCategory: action.payload,
            }
        default:
            return state
    }
}
