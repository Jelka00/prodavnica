import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  var products = [];
  function sendToBasket(id) {
    products.push(id);
    console.warn(products);
  }
  window.products = products;
  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <h1>Lista proizvoda</h1>
      <div className="col-sm-8 offset-sm-2">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Naziv</th>
              <th scope="col">Cena</th>
              <th scope="col">Opis</th>
              <th scope="col">Slika</th>
              <th scope="col">Opcije</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 150 }}
                  src={"http://localhost:8000/" + item.file_path}
                />
              </td>
              <td>
                <button
                  onClick={() => sendToBasket(item.id)}
                  type="button"
                  class="btn btn-info"
                >
                  Dodaj u korpu
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default ProductList;
