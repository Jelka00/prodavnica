import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductList from "./ProductList";
import SearchProduct from "./Search";
import ProductListAdmin from "./ProductListAdmin";
import Basket from "./Basket";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Prodavnica ski opreme</h1>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Routes>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
        </Routes>
        <Routes>
          <Route path="/adminList" element={<ProductListAdmin />}></Route>
        </Routes>
        <Routes>
          <Route path="/add" element={<AddProduct />}></Route>
        </Routes>
        <Routes>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
        </Routes>
        <Routes>
          <Route path="/search" element={<SearchProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
