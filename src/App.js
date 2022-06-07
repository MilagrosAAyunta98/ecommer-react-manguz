
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CategoryContainer from './pages/CategoryContainer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:id" element={<Detail />} />
          <Route exact path="/category/:categoryId" element={<CategoryContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
