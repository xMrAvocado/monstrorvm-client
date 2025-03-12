import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMonster() {
  const [newMonster, setNewMonster] = useState({
    name: "",
    categoryId: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleAll = (event) => {
    let name = event.target.name;
    let clone = { ...newMonster };
    clone[name] = event.target.value;
    setNewMonster(clone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/monsters`, {
        name: newMonster.name,
        categoryId: newMonster.categoryId,
        description: newMonster.description,
        image: newMonster.image,
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
      navigate("/");
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
