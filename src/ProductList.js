import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    /*const loadData = async () => {
      let result = await fetch("http://localhost:8000/api/list");
      result = await result.json();
      setData(result);
    };
    loadData();*/
    getData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  }
  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <h1>Lista proizvoda</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>ID</td>
            <td>Naziv</td>
            <td>Cena</td>
            <td>Opis</td>
            <td>Slika</td>
            <td>Izmene</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
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
                  onClick={() => deleteOperation(item.id)}
                  type="button"
                  class="btn btn-warning"
                >
                  Obrisi
                </button>
              </td>
              <td>
                <Link to={"update/" + item.id}>
                  <button type="button" class="btn btn-success">
                    Azuriraj
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
