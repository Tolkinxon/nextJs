import { useSelector, useDispatch } from "react-redux";
import { filteringItems } from "../redux/actions";
import { useEffect } from "react";

const NewsFilter = () => {

    

    const staticNews = useSelector(state => state.staticNews)
    const dispatch = useDispatch()



    const takingCategory = (e) => {
        let selectedCategory = e.target.textContent
        selectedCategory = selectedCategory == 'All' ? '' : selectedCategory
        const pattern = new RegExp(selectedCategory, 'gi')
        const filteredArr = staticNews.filter(item => item.category.match(pattern))
        dispatch(filteringItems(filteredArr))
    }



    return ( 
        <div className="news__filter w-100 d-flex justify-content-center">
            <div className="btn-group w-100" onClick={(e) => takingCategory(e)}>
                <button type="button" className="btn btn-dark avtive">All</button>
                <button type="button" className="btn btn-info">forecast</button>
                <button type="button" className="btn btn-danger">sport</button>
                <button type="button" className="btn btn-warning">education</button>
                <button type="button" className="btn btn-success">auto</button>
            </div>
        </div>
    );
}
 
export default NewsFilter;