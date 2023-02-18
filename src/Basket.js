import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Basket() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
    //getUser();
  }, []);

  /*async function getUser() {
    const id = JSON.parse(localStorage.getItem("user-info")).id;

    let user = await fetch("http://localhost:8000/api/user/" + id);

    user = await user.json();

    //setUserData(result);
    //alert(JSON.stringify(data.basket_products));
    return user;
  }*/

  async function removeFromBasket(idProd) {
    const id = JSON.parse(localStorage.getItem("user-info")).id;

    let user = await fetch("http://localhost:8000/api/user/" + id);
    user = await user.json();

    let str = JSON.stringify(user.basket_products);
    str = str.replace(/^"(.*)"$/, "$1");

    str = str + "," + window.products;

    let regex = new RegExp(idProd + ",?", "g");
    str = str.replace(regex, "");

    const updateData = {
      basket_products: str,
    };
    let result = await fetch("http://localhost:8000/api/updateUser/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!result) {
      throw new Error("Neuspesno brisanje!");
    }
    alert("Stavka uspesno izbrisana");
    window.location.reload(true);
  }

  async function getData() {
    const id = JSON.parse(localStorage.getItem("user-info")).id;

    let user = await fetch("http://localhost:8000/api/user/" + id);

    user = await user.json();

    let str = JSON.stringify(user.basket_products);
    str = str.replace(/^"(.*)"$/, "$1");

    let result = await fetch(
      "http://localhost:8000/api/listBasket/" + str + "," + window.products
    );
    result = await result.json();
    setData(result);
  }

  async function updateBasket() {
    const id = JSON.parse(localStorage.getItem("user-info")).id;

    let user = await fetch("http://localhost:8000/api/user/" + id);

    user = await user.json();

    let str = JSON.stringify(user.basket_products);
    str = str.replace(/^"(.*)"$/, "$1");

    var products = str + "," + window.products;

    const basket_products = products;

    const updateData = {
      basket_products: basket_products,
    };
    let result = await fetch("http://localhost:8000/api/updateUser/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!result) {
      throw new Error("Neuspesno azuriranje!");
    }
    alert("Korpa uspesno azurirana");
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
                  onClick={() => removeFromBasket(item.id)}
                  type="button"
                  class="btn btn-warning"
                >
                  Izbaci iz korpe
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <button onClick={updateBasket} type="button" class="btn btn-success">
        Azuriraj korpu
      </button>
    </div>
  );
}
export default Basket;
