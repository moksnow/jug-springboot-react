import Home from './components/Home';
import GroupList from './components/GroupList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route path='/groups' exact={true} element={<GroupList/>}></Route>
            </Routes>
        </Router>
    )


}

export default App;
