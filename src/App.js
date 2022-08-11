import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

      </Routes>


    </div>
  );
}

export default App;
