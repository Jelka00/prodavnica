import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Prodavnica ski opreme</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
