import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  async function addPost() {
    console.warn(title, content);
    const formData = new FormData();
    //Append- dodaj na kraju
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    let result = await fetch("http://localhost:8000/api/addPost", {
      method: "POST",
      body: formData,
    });
    console.warn(JSON.stringify(formData));
    alert("Objava je sacuvan!");
    navigate("/");
  }
  return (
    <div>
      <div className="col-sm-6-offset-sm-3">
        <br /> <br />
        <input
          id="input"
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Naslov"
        />
        <br /> <br />
        <input
          id="input"
          type="text"
          className="form-control"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Sadrzaj"
        />{" "}
        <br /> <br />
        <input
          id="input"
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="fajl"
        />{" "}
        <br /> <br />
        <button onClick={addPost} className="btn btn-primary">
          Dodaj objavu
        </button>
        <br /> <br />
      </div>
    </div>
  );
}

export default AddPost;
