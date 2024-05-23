import './index.scss'
import NavBar from './Components/NavBar';
import NewsList from './Components/NewsList';


const App = () => {
    return (
        <div className='App'>
            <NavBar />
            <div className='content'>
                <NewsList />
            </div>
        </div>
    )
}
 
export default App;