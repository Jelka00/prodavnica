import { useState } from "react";

function SearchProduct() {
  const [data, setData] = useState([]);

  async function search(key) {
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <div className="col-sm-6-offset-sm-3">
        <h1>Pretrazi proizvod</h1>
        <br />
        <input
          id="input"
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Pretrazi proizvod"
        />
        <br></br>
        <br />
        <br />
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Naziv</th>
              <th scope="col">Cena</th>
              <th scope="col">Opis</th>
              <th scope="col">Slika</th>
            </tr>
          </thead>
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
        </table>
      </div>
    </div>
  );
}

export default SearchProduct;
