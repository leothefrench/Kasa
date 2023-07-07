import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Accueil } from './components/Accueil';
import { APropos } from './components/APropos';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Accueil' element={<Accueil />} />
      <Route path='APropos' element={<APropos />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
