import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import GetProductsComponent from './components/GetProductsComponent';
import AddProductsComponent from './components/AddProductsComponent';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <Navbar />
          <header className="App-header">
            <h1>Sokogarden - Buy & Sell Online</h1>
          </header>

          <Routes>
            <Route path='/signup' element={<SignUpComponent />} />
            <Route path='/signin' element={<SignInComponent />} />
            <Route path='/addproducts' element={<AddProductsComponent />} />
            <Route path='/' element={<GetProductsComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
