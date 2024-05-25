import './index.scss'
import { useSelector, useDispatch } from 'react-redux';
import Error from './Components/Error/Error'
import NavBar from './Components/NavBar';
import NewsList from './Components/NewsList';
import NewsAddForm from './Components/NewsAddForm';
import NewsFilter from './Components/NewsFilter';


const App = () => {

    const { news, fetchingState } = useSelector(state => state)
    console.log(fetchingState);

    return (
        <>
        {fetchingState === 'error' ? (<Error />) :
            (
                <>
                    <div className='background'></div>
                    <div className='App'>
                        <NavBar />
                        <div className='content container'>
                            <NewsList />
                            <div className='content__inputs'>
                            <NewsAddForm />
                            <NewsFilter />
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        </>
    )
}
 
export default App;