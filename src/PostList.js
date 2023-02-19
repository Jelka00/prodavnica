import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function PostList() {
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
            </div>
          ))}
        </table>
      </div>
    </div>
  );
}
export default PostList;
