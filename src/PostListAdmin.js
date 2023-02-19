import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function PostListAdmin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function deletePost(id) {
    let result = await fetch("http://localhost:8000/api/deletePost/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  }

  async function getData() {
    let result = await fetch("http://localhost:8000/api/listPost");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <h1>Lista objava</h1>
      <div className="col-sm-8 offset-sm-2">
        <table class="table">
          <thead class="thead-dark"></thead>
          {data.map((item) => (
            <div class="card">
              <img
                src={"http://localhost:8000/" + item.file_path}
                className="card-img-top"
                alt="..."
              />
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <button
                onClick={() => deletePost(item.id)}
                type="button"
                class="btn btn-warning"
              >
                Obrisi
              </button>
              <br />
              <Link to={"/listPostAdmin/updatePost/" + item.id}>
                <button type="button" class="btn btn-success">
                  Azuriraj
                </button>
              </Link>
            </div>
          ))}
        </table>
      </div>
    </div>
  );
}
export default PostListAdmin;
