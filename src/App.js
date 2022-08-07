import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
