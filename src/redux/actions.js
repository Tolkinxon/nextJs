export const fetching = () => ({ type: 'NEWS_FETCHING' })
export const filtersFetching = () => ({ type: 'FILTERS_FETCHING' })

export const fetched = ( data ) => ({ type: 'NEWS_FETCHED', payload: data })
export const filtersFetched = ( data ) => ({ type: 'FILTERS_FETCHED', payload: data })

export const fetchingError = () => ({ type: 'NEWS_FETCHING_ERROR' })
export const filtersFetchingError = () => ({ type: 'FILTERS_FETCHING_ERROR' })

export const addData = (data) => ({ type: 'ADD_DATA', payload: data })

export const deletingItem = (data) => ({ type: 'DELETING_ITEM', payload: data })

export const changeActiveCategory = (data) => ({ type: 'CHANGE_ACTIVE_CATEGORY', payload: data })