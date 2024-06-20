const initialState = {
    news: [],
    newsFetchingState: '',
    filters: [],
    filtersFetchingState: '',
    activeCategory: 'all',
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEWS_FETCHING': 
            return {
                ...state,
                newsFetchingState: 'loading'
            }
        case 'NEWS_FETCHED': 
                return {
                    ...state,
                    newsFetchingState: 'loaded',
                    news: action.payload,
                }
        case 'NEWS_FETCHING_ERROR': 
                return {
                    ...state,
                    newsFetchingState: 'error'
                }
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
        case 'ADD_DATA': 
            return {
                ...state,
                news: [ action.payload,...state.news ],
            }
        case 'DELETING_ITEM': 
            return {
                ...state,
                news: state.news.filter(item => item.id !== action.payload),
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
