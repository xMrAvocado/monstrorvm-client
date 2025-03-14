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
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formCSS">
          <div className="formElement">
          <label>Name:&nbsp;</label>
          <input
            value={newMonster.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleAll}
          />
          </div>
          
          <div className="formElement">
          <label>Category:&nbsp;</label>
          {/*//todo: imprimir todas las categorias haciendo get y usando un .map*/}
          <select className="categoryForm" name="categoryId" onChange={handleAll} value={newMonster.categoryId}>
            <option value="1234">Infected</option>
            <option value="2345">Marked</option>
            <option value="3456">Packs</option>
            <option value="4567">R. Target</option>
            <option value="5678">Target</option>
          </select>
            </div>
          
          <div className="formElementTA">
          <label>Description:&nbsp;</label>
          <textarea
            className="textArea"
            value={newMonster.description}
            name="description"
            placeholder="Description"
            rows="10" cols="20"
            onChange={handleAll}
          />
          </div>
          
          <div className="formElement">
          <label>Image:&nbsp;</label>
          <input
            value={newMonster.image}
            name="image"
            type="url"
            placeholder="Image"
            onChange={handleAll}
          />
            </div>
          
          <div className="btnsForms">
            <button className="submitBtn" type="submit">Add Monster</button>
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
