import { v4 } from 'uuid';
import { addData } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NewsAddForm = () => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

 
    const add = (evt) => {
        evt.preventDefault()
        const newObj = { id: v4(), title, description, category }
        dispatch(addData(newObj))
    }

    return ( 
        <div className="news__add-for w-100 mb-4">
            <form className="border shadow-lg rounded-2 p-4 d-flex flex-column gap-4"  onSubmit={(evt) => add(evt)}>
                <div>
                    <label className="fw-bold text-white mb-1">Title name</label>
                    <input 
                        required
                        className="form-control " 
                        name='title' 
                        placeholder="title" 
                        id="title"  
                        value={title}  
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label className="fw-bold text-white mb-1">
                      Description
                    </label>
                    <textarea 
                        className="form-control " 
                        name='description' 
                        placeholder="description" 
                        id="description"
                        value={description}  
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

               <div>
                    <label className="fw-bold text-white mb-1">
                        Category
                    </label>
                    <select 
                    className="form-select" 
                    id="category" 
                    name="category"
                    value={category}  
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value='all' selected >all</option>
                        <option value='auto'>avto</option>
                        <option value='education'>education</option>
                        <option value='forecast'>forecast</option>
                        <option value='sport'>sport</option>
                    </select>
               </div>
                
                <button className="w-100 btn btn-dark" type="submit" >Add news</button>
            </form>
        </div>
     );
}
 
export default NewsAddForm;