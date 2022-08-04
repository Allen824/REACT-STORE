import './App.css';
import Items from './components/Items'
import Header from './components/App-Header'
import Cart from './components/Cart'
import Final from './components/Final'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <div>
        <Routes>
          <Route path="/" element={<Items />} /> 
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Final"  element={<Final />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
