import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  async function addProduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    //Append- dodaj na kraju
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);

    let result = await fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formData,
    });
    console.warn(JSON.stringify(formData));
    alert("Proizvod je sacuvan!");
    navigate("/");
  }
  return (
    <div>
      <div className="col-sm-6-offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="naziv"
        />
        <br />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="fajl"
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="cena"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="opis"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Dodaj proizvod
        </button>
        <br />
      </div>
    </div>
  );
}

export default AddProduct;
