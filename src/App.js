import './App.css';
import CardList from './Components/CardList/CardList';
import NavBar from './Components/NavBar/NavBar'


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='general-container'>
      <CardList title={"Productos"}/>
      <CardList title={"Productos Recomendados"}/>
      </div>

      
    </div>

  );
}

export default App;

