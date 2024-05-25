const NewsFilter = () => {
    return ( 
        <div className="news__filter w-100 d-flex justify-content-center">
            <div class="btn-group w-100" >
                <button type="button" class="btn btn-dark avtive">All</button>
                <button type="button" class="btn btn-info">forecast</button>
                <button type="button" class="btn btn-danger">sport</button>
                <button type="button" class="btn btn-warning">education</button>
                <button type="button" class="btn btn-success">auto</button>
            </div>
        </div>
    );
}
 
export default NewsFilter;