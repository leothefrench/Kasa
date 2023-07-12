import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Housings from '../../pages/Housings';
import About from '../../pages/About';
import Error404Page from '../../pages/Error404';


const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/HousingsPage' element={<Housings />} />
            <Route path='/About' element={<About />} />
            <Route path='*' element={<Error404Page />} />
        </Routes>
  )
}

export default Router;