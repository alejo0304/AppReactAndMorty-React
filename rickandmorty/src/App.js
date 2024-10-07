
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Componentes/Main';
import Episodios from './Componentes/Episodios';
import Origen from './Componentes/Origen';

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/episodios/:id' element={<Episodios/>}/>
    <Route path='/informacion/:id' element={<Origen/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
