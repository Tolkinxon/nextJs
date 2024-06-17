const initialState = {
    news: [],
    newsFetchingState: '',
    filters: [],
    filtersFetchingState: '',
    activeCategory: 'all',
    filteredNews: []
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
                    filteredNews: state.activeCategory == 'all' ? action.payload : action.payload.filter(item => 
                        item.category == state.activeCategory)
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
            const newData = [ action.payload,...state.news ]
            return {
                ...state,
                news: newData,
                filteredNews: state.activeCategory == 'all' ? newData : newData.filter(item => item.category == state.activeCategory)
            }
        case 'DELETING_ITEM': 
            return {
                ...state,
                news: action.payload,
                filteredNews: state.activeCategory == 'all' ? action.payload : action.payload.filter(item => 
                    item.category == state.activeCategory)
            }
        case 'CHANGE_ACTIVE_CATEGORY': 
            return {
                ...state,
                activeCategory: action.payload,
                filteredNews: action.payload == 'all' ? state.news : state.news.filter(item => 
                    item.category == action.payload)
            }
        default:
            return state
    }
}
