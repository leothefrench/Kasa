import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Housings from '../../pages/Housings';
import About from '../../pages/About';
import Error404Page from '../../pages/Error404';


const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/housings/:id' element={<Housings />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error404Page />} />
        </Routes>
  )
}

export default Router;