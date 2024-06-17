import Loader from './Loader/Loader';
import NewsItem from './NewsItem';
import { useHttp } from './../hooks/useHttp'
import { useSelector, useDispatch } from 'react-redux';
import { fetching, fetched, fetchingError } from './../redux/actions'
import { useEffect } from 'react';



const NewsList = () => {

    const { request } = useHttp()
    const { fetchingState, filteredNews } = useSelector(state => state)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(fetching())
        request('http://localhost:3001/news')
            .then(data => dispatch(fetched(data)))
            .catch(() => dispatch(fetchingError()))
        
    }, [])


    if(fetchingState == 'loading') {
        return  <Loader />
    }
    else if (fetchingState == 'error') {
        return <h1>ERROR</h1>
    }


    function renderNewsItems (arr) {
        if(arr.length === 0) {
            return <h1>This array is empty</h1>
        }

       return arr.map(({id, ...props}) => {
            return <NewsItem key={id} id={id} {...props}/>
        })
    }
    let elements = renderNewsItems(filteredNews)

    return ( 
        <>
            <div className="container d-flex flex-column news__list gap-2" >
                <h1 className="text-danger text-center">
                    Breaking news
                </h1>
                { elements }
            </div>
        </>
     );
}
 
export default NewsList;