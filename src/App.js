
import './App.css';
import CardList from './Components/CardList/CardList';
import ItemCardList from './Components/ItemCardList/ItemCardList'
import ItenDetailContainer from './Components/ItenDetailContainer/ItenDetailContainer';
import NavBar from './Components/NavBar/NavBar'


function App() {

  return (
    <div className="App">
      <NavBar />
      {/* <div className='general-container'>
      <ItemCardList title={"Descuentos de la Semana"}/>
      <CardList title={"Productos"}/>
      </div> */}
      <ItenDetailContainer />
    </div>

  );
}

export default App;

