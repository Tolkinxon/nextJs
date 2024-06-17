import { useSelector, useDispatch } from "react-redux";
import { filtersFetching, filtersFetched, filtersFetchingError, 
         changeActiveCategory } from "../redux/actions";
import { useEffect } from "react";
import { useHttp } from './../hooks/useHttp'
import classNames from "classnames";


const NewsFilter = () => {
    const filters = useSelector(state => state.filters)
    const activeCategory = useSelector(state => state.activeCategory)
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(() => {
        dispatch(filtersFetching())
        request('http://localhost:3001/filters')
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
    })


    const elements = filters.map(({label, categoryName, color }) => {
        const btnClasses = classNames('btn','text-white', color, {
            'active': categoryName == activeCategory
        })
        return <button type="button" className={btnClasses} onClick={() => dispatch(changeActiveCategory(categoryName))}>{ label }</button>
    })



    return ( 
        <div className="news__filter w-100 d-flex justify-content-center">
            <div className="btn-group w-100">
                {
                  elements  
                }
            </div>
        </div>
    );
}
 
export default NewsFilter;