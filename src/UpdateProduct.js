import { withRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateProduct() {
  const [data, setData] = useState([]);
  const id = useParams();
  useEffect(() => {
    const sendData = async () => {
      let result = await fetch("http://localhost:8000/api/product/" + id.id);

      result = await result.json();
      setData(result);
    };
    sendData();
  });

  async function updateProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const file_path = document.getElementById("file_path").value;

    const updateData = {
      name: name,
      price: price,
      description: description,
      file_path: file_path,
    };
    let result = await fetch("http://localhost:8000/api/update/" + id.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!result) {
      throw new Error("Neuspesno azuriranje!");
    }
    alert("Proizvod uspesno azuriran");
  }
  return (
    <div>
      <h1>UpdateProduct</h1>
      <input type="text" defaultValue={data.name} id="name" /> <br /> <br />
      <input type="text" defaultValue={data.price} id="price" /> <br /> <br />
      <input
        type="text"
        defaultValue={data.description}
        id="description"
      />{" "}
      <br /> <br />
      <input
        type="file"
        defaultValue={data.file_path}
        id="file_path"
      /> <br /> <br />
      <img
        style={{ width: 150 }}
        src={"http://localhost:8000/" + data.file_path}
      />{" "}
      <br /> <br />
      <button onClick={updateProduct}>Azuriraj</button>
    </div>
  );
}

export default UpdateProduct;
