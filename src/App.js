import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Home />
      {/* <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
