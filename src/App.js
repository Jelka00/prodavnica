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
import Footer from "./components/Footer";
import News from "./components/News";
import AddPost from "./AddPost";
import PostList from "./PostList";
import UpdatePost from "./UpdatePost";
import PostListAdmin from "./PostListAdmin";
import Map from "./Map";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1 class="text-5xl font-extrabold dark:text-black">
          Prodavnica zimske opreme
        </h1>
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
          <Route path="/list" element={<ProductList />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<ProductListAdmin />}></Route>
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
        <Routes>
          <Route path="/home" element={<News></News>}></Route>
        </Routes>
        <Routes>
          <Route path="/addPost" element={<AddPost></AddPost>}></Route>
        </Routes>
        <Routes>
          <Route
            path="/listPostAdmin"
            element={<PostListAdmin></PostListAdmin>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/listPostAdmin/updatePost/:id"
            element={<UpdatePost></UpdatePost>}
          ></Route>
        </Routes>
        <Routes>
          <Route path="/listPost" element={<PostList></PostList>}></Route>
        </Routes>
        <Routes>
          <Route path="/map" element={<Map></Map>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
