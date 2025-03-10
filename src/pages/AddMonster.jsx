import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddMonster(props) {
  const [newMonster, setNewMonster] = useState({
    name: "",
    categoryId: "",
    description: "",
    image: "",
  });

  const handleAll = (event) => {
    let name = event.target.name;
    let clone = { ...newMonster };
    clone[name] = event.target.value;
    setNewMonster(clone);
  };

/*Para selector ver clase de estudiantes

Para hacer elpost ver clase de project management*/

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5005/monsters`, {
        name: name,
        categoryId: categoryId,
        description: description,
        image: image,
      });
      console.log("todo bien, tarea creada");
      //console.log(response)
      setNewMonster(response.data);
      setNewMonster({
        name: "",
        categoryId: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formCSS">
          <label>Name:&nbsp;</label>
          <input
            value={newMonster.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleAll}
          />
          <label>Id Category:&nbsp;</label>
          <input
            value={newMonster.categoryId}
            name="categoryId"
            type="text"
            placeholder="Category Id"
            onChange={handleAll}
          />
          <label>Description:&nbsp;</label>
          <input
            className="textArea"
            value={newMonster.description}
            name="description"
            type="textarea"
            placeholder="Description"
            onChange={handleAll}
          />
          <label>Image:&nbsp;</label>
          <input
            value={newMonster.image}
            name="image"
            type="url"
            placeholder="Image"
            onChange={handleAll}
          />
          <div className="btnsForms">
            <button type="submit">Add Monster</button>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddMonster;
