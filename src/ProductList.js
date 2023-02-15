import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      let result = await fetch("http://localhost:8000/api/list");
      result = await result.json();
      setData(result);
    };
    loadData();
  }, []);
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
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
