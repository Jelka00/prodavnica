import { withRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdatePost() {
  const [data, setData] = useState([]);
  const id = useParams();
  useEffect(() => {
    const sendData = async () => {
      let result = await fetch("http://localhost:8000/api/post/" + id.id);

      result = await result.json();
      setData(result);
    };
    sendData();
  });

  async function updatePost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const file_path = document.getElementById("file_path").value;

    const updateData = {
      title: title,
      content: content,
      file_path: file_path,
    };
    let result = await fetch("http://localhost:8000/api/updatePost/" + id.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!result) {
      throw new Error("Neuspesno azuriranje!");
    }
    alert("Objava uspesno azurirana");
  }
  return (
    <div>
      <h1>Azuriraj objavu</h1>
      <input type="text" defaultValue={data.title} id="title" /> <br /> <br />
      <input type="text" defaultValue={data.content} id="content" /> <br />{" "}
      <br />
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
      <button onClick={updatePost} type="button" class="btn btn-warning">
        Azuriraj
      </button>
    </div>
  );
}

export default UpdatePost;
