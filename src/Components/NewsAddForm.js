
const NewsAddForm = () => {
    return ( 
        <div className="news__add-for w-100 mb-4">
            <form className=" border shadow-lg rounded-2 p-4 d-flex flex-column gap-4">
                <div>
                    <label className="fw-bold text-white mb-1" for="title">Title name</label>
                    <input className="form-control " name='title' placeholder="title" id="title" required/>
                </div>

                <div>
                    <label className="fw-bold text-white mb-1" for="description">
                      Description
                    </label>
                    <textarea className="form-control " name='description' placeholder="description" id="description"/>
                </div>

               <div>
                    <label className="fw-bold text-white mb-1" for="category">
                        Category
                    </label>
                    <select className="form-select" id="category">
                        <option>choose category</option>
                    </select>
               </div>
                
                <button className="w-100 btn btn-dark" type="submit">Add news</button>
            </form>
        </div>
     );
}
 
export default NewsAddForm;