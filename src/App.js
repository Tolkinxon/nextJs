import './index.scss'
import NavBar from './Components/NavBar';
import NewsList from './Components/NewsList';
import NewsAddForm from './Components/NewsAddForm';
import NewsFilter from './Components/NewsFilter';

const App = () => {
    return (
        <div className='App'>
            <NavBar />
            <div className='content container border border-warning'>
                <NewsList />
                <div className='content__inputs'>
                    <NewsAddForm />
                    <NewsFilter />
                </div>
            </div>
        </div>
    )
}
 
export default App;