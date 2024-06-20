const initialState = {
    news: [],
    newsFetchingState: '',
}

export const news = (state = initialState, action) => {
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
   
        default:
            return state
    }
}
