import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
function EditMonster() {
  const parametrosDinamicos = useParams();

  const navigate = useNavigate();

  const [editedMonster, setEditedMonster] = useState({});

  const handleAll = (event) => {
    let name = event.target.name;
    let clone = { ...editedMonster };
    clone[name] = event.target.value;
    setEditedMonster(clone);
  };

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/monsters/${
          parametrosDinamicos.monsterId
        }`
      )
      .then((response) => {
        setEditedMonster(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/monsters/${
          parametrosDinamicos.monsterId
        }`,
        {
          name: editedMonster.name,
          categoryId: editedMonster.categoryId,
          description: editedMonster.description,
          image: editedMonster.image,
        }
      );
      setEditedMonster(response.data);
      setEditedMonster({
        name: "",
        categoryId: "",
        description: "",
        image: "",
      });
      navigate(`/`);
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
            value={editedMonster.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleAll}
          />
        </div>
        <div className="formElement">
          <label>Id Category:&nbsp;</label>
          <select
            className="categoryForm"
            name="categoryId"
            onChange={handleAll}
            value={editedMonster.categoryId}
          >
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
            value={editedMonster.description}
            name="description"
            placeholder="Description"
            rows="10" cols="20"
            onChange={handleAll}
          />
          </div>
          <div className="formElement">
          <label>Image:&nbsp;</label>
          <input
            value={editedMonster.image}
            name="image"
            type="url"
            placeholder="Image"
            onChange={handleAll}
          />
          </div>
          <div className="btnsForms">
            <button className="submitBtn"  type="submit">Update Monster</button>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditMonster;
