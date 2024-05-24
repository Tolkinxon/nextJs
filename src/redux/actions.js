export const fetching = () => ({ type: 'FETCHING' })
export const fetched = ( data ) => ({ type: 'FETCHED', payload: data  })
export const fetchingError = () => ({ type: 'FETCHING_ERROR'})